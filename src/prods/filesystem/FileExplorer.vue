<template>
  <div
    @mousemove="updateCoords"
    @click="detectOverCtxMenu"
    @mouseleave="overCtxMenu = false"
  >
    <Spinner v-if="loading" />
    <template v-else>
      <template v-if="path !== '' && path !== separator">
        <a
          class="filename ml-14"
          @click="cd(path.substring(0, path.lastIndexOf(separator)))"
        >
          ..
        </a>
      </template>
      <template v-else>&nbsp;</template>
      <table>
        <tr v-for="entry of entries" :key="entry.path">
          <td class="filename" @mouseover="hovered = entry">
            <template v-if="entry.isDir">
              <i class="far fa-folder icon"></i>
              <a @click="cd(entry.path)" @contextmenu="context">
                {{ entry.name }}
              </a>
            </template>
            <span v-else @contextmenu="context">
              <a @click="download(entry)">
                <i class="far fa-file-alt icon"></i>{{ entry.name }}
              </a>
            </span>
          </td>
          <td class="filename">
            <template v-if="!entry.isDir">
              {{ format(entry.filesize) }}
            </template>
          </td>
        </tr>
        <tr class="footer">
          <td>
            <i class="fas fa-plus icon"></i>
            <a @click="loadFile">File upload</a>
            <input
              id="fileInput"
              type="file"
              style="display: none"
              @change="uploadFile"
            />
          </td>
        </tr>
      </table>
    </template>
    <div
      id="contextMenu"
      style="display: none"
      @mouseenter="overCtxMenu = true"
      @mouseleave="overCtxMenu = false"
    >
      <div class="frame">
        <div class="action-group">
          <template v-if="selected && textTypes.indexOf(selected.type) !== -1">
            <a class="action" @click="preview(selected)">Preview</a>
          </template>
          <a class="action" @click="download(selected)">Download</a>
        </div>
        <div class="action-group">
          <a class="action" @click="deleteEntry">Cut</a>
          <a class="action" @click="deleteEntry">Copy</a>
          <a class="action" @click="deleteEntry">Paste</a>
        </div>
        <div class="action-group">
          <a class="action" @click="deleteEntry">Delete</a>
        </div>
      </div>
    </div>
  </div>
  <Modal
    title="Text file previewer"
    :opened="openModal"
    v-on:close="openModal = false"
  >
    <pre>{{ modalContent }}</pre>
  </Modal>
</template>

<script>
import Spinner from "@/components/Spinner";
import Modal from "@/components/Modal";
import { setInterval } from "core-js";
const KO = 1024;
const MAX_FILE_SIZE = 512 * KO;
const MAX_CHUNK_LENGTH = 256 * KO;
const MAX_ITER = 10000;

export default {
  components: {
    Spinner,
    Modal,
  },
  data() {
    return {
      separator: "/",
      url: `${this.$backendUrl}/fs`,
      entries: [],
      loading: false,
      x: 0,
      y: 0,
      overCtxMenu: false,
      ctxOpened: false,
      hovered: null,
      selected: null,
      textTypes: [
        "application/json",
        "text/plain",
        "text/html",
        "text/csv",
        "text/xml",
      ],
      modalContent: "",
      openModal: false,
    };
  },
  methods: {
    createDownloadFile(filename, content, type) {
      const element = document.createElement("a");
      element.setAttribute(
        "href",
        `data:${type ? type : "text/plain"};charset=utf-8,${content}`
      );
      element.setAttribute("download", filename);
      element.style.display = "none";
      document.body.appendChild(element);

      element.click();
    },
    openFile(path, action) {
      this.axios
        .post(`${this.url}/file`, {
          _method: "GET",
          file: path,
        })
        .then((res) => {
          if (action === "download")
            this.createDownloadFile(
              res.data.filename,
              res.data.content,
              res.data.type
            );
          else if (
            action === "preview" &&
            this.textTypes.indexOf(res.data.type) !== -1
          ) {
            this.modalContent = res.data.content;
            this.openModal = true;
          }
          this.closeContextMenu();
        })
        .catch((e) => {
          console.error(e);
        });
    },
    download(entry) {
      this.openFile(entry.path, "download");
    },
    preview(entry) {
      this.openFile(entry.path, "preview");
    },
    closeContextMenu() {
      document.getElementById("contextMenu").style.display = "none";
      this.ctxOpened = false;
    },
    detectOverCtxMenu() {
      if (!this.overCtxMenu) {
        this.closeContextMenu();
      }
    },
    updateCoords(evt) {
      this.x = evt.pageX;
      this.y = evt.pageY;
    },
    deleteEntry(evt) {
      if (this.selected.isDir) {
        this.axios
          .post(`${this.url}/dir`, {
            _method: "DELETE",
            directory: this.selected.path,
            recursive: true,
            force: evt.shiftKey,
          })
          .then((res) => {
            this.$emit("refresh");
          })
          .catch((e) => {
            console.error(e);
          });
      } else {
        this.axios
          .post(`${this.url}/file`, {
            _method: "DELETE",
            filename: this.selected.path,
          })
          .then((res) => {
            this.$emit("refresh");
          })
          .catch((e) => {
            console.error(e);
          });
      }
      this.closeContextMenu();
    },
    context(evt) {
      this.closeContextMenu();
      this.selected = this.hovered;
      evt.preventDefault();
      const contextMenu = document.getElementById("contextMenu");
      contextMenu.style.display = "block";
      contextMenu.style.left = this.x + "px";
      contextMenu.style.top = this.y + "px";
      this.ctxOpened = true;
      return;
    },
    format(size) {
      let unity = "B";
      if (size > KO) {
        unity = "kB";
        size = Math.ceil(size / KO);
      }
      return size + " " + unity;
    },
    uploadFile() {
      const file = document.getElementById("fileInput").files[0];
      file.arrayBuffer().then((buffer) => {
        const content = Object.values(new Uint8Array(buffer));

        if (content.length > MAX_FILE_SIZE) {
          console.error("File is too big");
          return;
        }

        const nbChunks = Math.ceil(content.length / MAX_CHUNK_LENGTH);
        console.log(`${nbChunks} chunks`);

        if (nbChunks > MAX_ITER) {
          console.error("File is too big");
          return;
        }

        if (nbChunks > 1) {
          let integrity = true;
          const uploadedChunks = [];
          this.axios
            .get(`${this.url}/tmp`, {
              _method: "GET",
            })
            .then((res) => {
              console.log(res.data);
              const uid = res.data.uid;

              for (let c = 0; c < nbChunks; c++) {
                const offset = c * MAX_CHUNK_LENGTH;
                const chunk = content.slice(offset, offset + MAX_CHUNK_LENGTH);

                this.axios
                  .post(`${this.url}/filepart`, {
                    _method: "PUT",
                    directory: uid,
                    filename: file.name,
                    chunk: c,
                    content: chunk,
                  })
                  .then((res) => {
                    uploadedChunks.push(c);
                  })
                  .catch((e) => {
                    integrity = false;
                    console.error(`Error while uploading file: ${e}`);
                    document.getElementById("fileInput").value = "";
                  });
              }

              let i = 0;

              const interval = setInterval(() => {
                if (i > 600 || !integrity) {
                  console.error(`Error while uploading file`);
                  clearInterval(interval);
                }
                if (uploadedChunks.length === nbChunks) {
                  this.axios
                    .post(`${this.url}/mergeparts`, {
                      _method: "POST",
                      uid: uid,
                      directory: this.path,
                      filename: file.name,
                    })
                    .then((res) => {
                      this.$emit("refresh");
                    })
                    .catch((e) => {
                      integrity = false;
                      console.error(`Error while uploading file: ${e}`);
                      document.getElementById("fileInput").value = "";
                    });
                  clearInterval(interval);
                }
              }, 10);
            })
            .catch((e) => {
              console.error(e);
            });
          return;
        }
        this.axios
          .post(`${this.url}/file`, {
            _method: "PUT",
            directory: this.path,
            filename: file.name,
            content: content,
          })
          .then((res) => {
            this.$emit("refresh");
          })
          .catch((e) => {
            console.error(`Error while uploading file: ${e}`);
            document.getElementById("fileInput").value = "";
          });
      });
    },
    loadFile() {
      document.getElementById("fileInput").click();
    },
    cd(path) {
      this.$emit("cd", path);
    },
    getDir(path) {
      this.loading = true;
      this.axios
        .post(`${this.url}/dir`, {
          _method: "GET",
          directory: path,
        })
        .then((res) => {
          this.entries = res.data;
          this.loading = false;
        })
        .catch((e) => {
          console.error(`Error while fetching distant directory: ${e}`);
        });
    },
  },
  props: {
    path: String,
  },
  mounted() {
    this.getDir(this.$props.path);
  },
  watch: {
    path() {
      this.getDir(this.$props.path);
    },
  },
  emits: ["cd", "refresh"],
};
</script>

<style lang="scss" scoped>
.filename {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
.icon {
  width: 1rem;
  text-align: center;
  margin-right: 0.5rem;
}

.footer {
  td {
    color: #4da9f5;
    padding-top: 1rem;
    a,
    i {
      cursor: pointer;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
#contextMenu {
  position: absolute;
  background: #f0f0f0;
  width: 200px;
  border: solid 1px #C0C0C0;

  .frame {
    margin: 2px;

    .action-group {
      border-bottom: solid 1px #C0C0C0;
      padding-bottom: 4px;
      margin-bottom: 4px;

      .action {
        display: block;
        line-height: 2rem;
        cursor: pointer;
        padding-left: 1rem;
        padding-right: 1rem;

        &:hover {
          background: silver;
        }
      }

      &:last-child {
        border: none;
        padding-bottom: 0;
      }
    }
  }
}
</style>