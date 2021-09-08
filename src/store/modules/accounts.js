import { createStore } from "vuex";
import { db } from "@/firebase";

const accountsStore = createStore({
  state: () => ({
    count: 0,
    accounts: null /*[
      {
        bank: "boursorama",
        entries: [
          {
            type: "expanse",
            amount: "13.00",
            labels: [],
            date: 1630454400000,
            category: "Abonnements & téléphonie",
            id: "c3ea78c6-72bb-4844-8b61-8d0b4e2dcb3a"
          },
          {
            date: 1630454400000,
            amount: "2.50",
            labels: [],
            category: "Virements émis",
            type: "expanse",
            id: "8f40aa4b-fd5c-49d2-a8ea-6a73ae47ff63"
          },
          {
            type: "expanse",
            labels: [],
            date: 1630454400000,
            category: "Auto & Moto",
            amount: "31.76",
            id: "3fff097a-b210-44fe-a8d8-f546fa8bd09a"
          },
          {
            date: 1630454400000,
            labels: [],
            amount: "980.00",
            category: "Virements émis",
            type: "expanse",
            id: "1c303504-0ec7-4f36-b38a-7f9e62da2c74"
          },
          {
            date: 1630368000000,
            category: "Santé",
            labels: [],
            amount: "7.50",
            type: "income",
            id: "49777dbe-8478-47ce-a80d-5575a2a0d590"
          },
          {
            type: "income",
            category: "Virements reçus",
            date: 1630281600000,
            labels: [],
            amount: "500.00",
            id: "fae50a75-f264-4503-959c-b682f23faa2c"
          },
          {
            category: "Auto & Moto",
            date: 1630281600000,
            amount: "1.00",
            type: "expanse",
            labels: [],
            id: "f7b6f9d1-6cd0-4510-a22e-25ebab90eb75"
          },
          {
            type: "expanse",
            amount: "50.00",
            date: 1630281600000,
            labels: [],
            category: "Loisirs",
            id: "b28bafef-a49d-4ef5-ad0e-17605afbe85d"
          },
          {
            date: 1630281600000,
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            amount: "183.04",
            id: "94895a32-06cc-4e74-be5d-f7a9f9cf9a9a"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            date: 1630281600000,
            amount: "5.55",
            labels: [],
            id: "7aa0175e-6b84-470b-9557-6f6c4de7b1ba"
          },
          {
            date: 1630281600000,
            labels: [],
            category: "Santé",
            amount: "8.90",
            type: "expanse",
            id: "59a164a9-699e-4cdd-bb2d-42c65f31abca"
          },
          {
            type: "expanse",
            amount: "34.30",
            category: "Santé",
            labels: [],
            date: 1630281600000,
            id: "18c706d4-4f86-4dba-b8dc-489bb7dade8f"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            date: 1630022400000,
            labels: [],
            amount: "17.43",
            id: "e8178828-9922-47a5-b7aa-e404c0d1727e"
          },
          {
            type: "expanse",
            date: 1630022400000,
            category: "Santé",
            labels: [],
            amount: "10.95",
            id: "dd46be63-2fcf-4289-a713-4a5a548a9a65"
          },
          {
            date: 1630022400000,
            category: "Loisirs",
            type: "expanse",
            labels: [],
            amount: "7.90",
            id: "8d39b8e8-3250-4858-a364-2e359c43f694"
          },
          {
            category: "Revenus du travail",
            date: 1630022400000,
            type: "income",
            amount: "1742.04",
            labels: [],
            id: "83eb465a-dd3d-4b2a-9b30-a6c950f243c2"
          },
          {
            date: 1630022400000,
            labels: [],
            type: "income",
            amount: "9.00",
            category: "Santé",
            id: "58ef9d59-ac53-44c1-8474-81a8c5176615"
          },
          {
            date: 1630022400000,
            category: "Vie quotidienne",
            labels: [],
            amount: "2.70",
            type: "expanse",
            id: "56bc259b-e52b-4ced-995c-3576bab3edb7"
          },
          {
            type: "expanse",
            date: 1629936000000,
            labels: [],
            amount: "7.50",
            category: "Santé",
            id: "f1183dc0-65f6-4915-8124-711ad32bffa5"
          },
          {
            date: 1629936000000,
            labels: [],
            amount: "7.90",
            type: "expanse",
            category: "Santé",
            id: "31c0d69a-317a-417f-90de-6f4b87a4223d"
          },
          {
            date: 1629849600000,
            labels: [],
            category: "Santé",
            type: "income",
            amount: "16.06",
            id: "e3701f4d-090e-4b1c-8261-952487d20d62"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            date: 1629849600000,
            amount: "4.00",
            type: "expanse",
            id: "ad2937ee-41ae-40a8-b1f6-e770adc4ed85"
          },
          {
            date: 1629849600000,
            labels: [],
            type: "income",
            category: "Virements reçus",
            amount: "400.00",
            id: "6edfb393-8c73-4abf-9b68-c5ebd1908b24"
          },
          {
            category: "Auto & Moto",
            date: 1629849600000,
            amount: "20.00",
            labels: [],
            type: "expanse",
            id: "6676414c-f9e5-47e8-8ce7-93bd6df0a983"
          },
          {
            type: "expanse",
            date: 1629849600000,
            labels: [],
            amount: "3.80",
            category: "Loisirs",
            id: "2bd9842e-0322-4cd3-838b-c1bd9feb6bec"
          },
          {
            date: 1629763200000,
            type: "expanse",
            amount: "37.80",
            labels: [],
            category: "Abonnements & téléphonie",
            id: "c4728c76-83a4-45cd-994c-65ad2f8aa410"
          },
          {
            labels: [],
            date: 1629763200000,
            category: "Chèques",
            type: "expanse",
            amount: "50.00",
            id: "3dd4d924-a5d1-4c32-bfa1-e3d5d93a9510"
          },
          {
            date: 1629676800000,
            type: "expanse",
            amount: "5.90",
            category: "Loisirs",
            labels: [],
            id: "925a6aa9-a42e-4356-9acf-ac2b893183e7"
          },
          {
            date: 1629676800000,
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            amount: "24.70",
            id: "74ece57d-3858-450d-89b8-115e8d28be4c"
          },
          {
            date: 1629676800000,
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            amount: "13.85",
            id: "3e93d8c4-0c9e-43bc-90e5-3886902fe953"
          },
          {
            type: "income",
            date: 1629676800000,
            amount: "280.00",
            category: "Santé",
            labels: [],
            id: "38ff80a4-dc92-4035-8aad-c46d12509d05"
          },
          {
            amount: "164.43",
            date: 1629417600000,
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            id: "571ec29c-abf7-445a-ac5b-77d00cb7115a"
          },
          {
            date: 1629244800000,
            category: "Vie quotidienne",
            amount: "34.30",
            type: "expanse",
            labels: [],
            id: "2680c825-c466-4f59-9a9f-9ce3fec59ab4"
          },
          {
            category: "Loisirs",
            date: 1629158400000,
            type: "expanse",
            labels: [],
            amount: "38.01",
            id: "e8a51c21-95c4-4118-acef-92cd204709f4"
          },
          {
            labels: [],
            date: 1629158400000,
            type: "expanse",
            amount: "13.00",
            category: "Impôts & Taxes",
            id: "26c643b1-139c-46aa-821e-fd48c70f4581"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            amount: "6.19",
            labels: [],
            date: 1629072000000,
            id: "d75a5aa9-4758-4f84-b00d-2c358bc4f1ef"
          },
          {
            amount: "20.00",
            type: "expanse",
            labels: [],
            date: 1629072000000,
            category: "Mouvements internes débiteurs",
            id: "a29c38dd-5dbe-4106-9008-d242fd1b44a7"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            amount: "14.70",
            labels: [],
            date: 1629072000000,
            id: "72c57b4e-db20-49d8-92a7-7b81d985c092"
          },
          {
            amount: "14.00",
            date: 1629072000000,
            category: "Non catégorisé",
            type: "expanse",
            labels: [],
            id: "4a0064c6-4dc3-4ab6-a0cd-b231136d8c92"
          },
          {
            date: 1629072000000,
            category: "Auto & Moto",
            type: "expanse",
            amount: "1.20",
            labels: [],
            id: "3f086c5f-7fab-4a93-ac2d-ada632d5a0a3"
          },
          {
            date: 1629072000000,
            amount: "47.85",
            labels: [],
            type: "expanse",
            category: "Loisirs",
            id: "304bc064-53a4-48d5-ae2d-da5938e0dde6"
          },
          {
            date: 1629072000000,
            amount: "47.85",
            labels: [],
            category: "Loisirs",
            type: "expanse",
            id: "2381c80a-e6af-474d-b319-f4a7cfb859f8"
          },
          {
            amount: "6.60",
            labels: [],
            type: "expanse",
            date: 1628812800000,
            category: "Loisirs",
            id: "ee91618e-c4c5-4bf6-aef8-cbfe1292d668"
          },
          {
            amount: "9.50",
            date: 1628812800000,
            type: "expanse",
            labels: [],
            category: "Loisirs",
            id: "9506ab59-8d89-4dc0-a260-e620cb330304"
          },
          {
            amount: "25.20",
            category: "Loisirs",
            labels: [],
            date: 1628812800000,
            type: "expanse",
            id: "4e3a4091-fbfa-4e9a-9cdd-06b48821db26"
          },
          {
            category: "Loisirs",
            type: "expanse",
            amount: "12.50",
            date: 1628812800000,
            labels: [],
            id: "3cc2e550-a55d-463a-b088-c0eac7b4b8af"
          },
          {
            amount: "1.90",
            date: 1628726400000,
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            id: "9f2e6637-4b0b-4dbd-ace7-3fe2096e152b"
          },
          {
            labels: [],
            date: 1628726400000,
            type: "expanse",
            category: "Vie quotidienne",
            amount: "34.30",
            id: "50a91821-712f-4ff5-837a-5b3d8b959871"
          },
          {
            category: "Vie quotidienne",
            date: 1628640000000,
            labels: [],
            type: "expanse",
            amount: "9.90",
            id: "e78e2081-1d44-4e69-976e-7104d9f0d229"
          },
          {
            date: 1628640000000,
            type: "expanse",
            amount: "39.49",
            category: "Loisirs",
            labels: [],
            id: "297482d5-4fb3-4985-9448-9c0a2c09cd87"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            amount: "27.58",
            labels: [],
            date: 1628553600000,
            id: "fb034942-fdd8-45d6-a44e-21fb5fa818c6"
          },
          {
            amount: "239.22",
            type: "expanse",
            date: 1628553600000,
            category: "Vie quotidienne",
            labels: [],
            id: "b79738f7-8d2b-4979-9fa2-d9256211b012"
          },
          {
            type: "expanse",
            category: "Logement",
            labels: [],
            amount: "16.00",
            date: 1628553600000,
            id: "8780f133-7405-4587-b547-7fcf9a6e25bb"
          },
          {
            amount: "13.90",
            type: "expanse",
            date: 1628553600000,
            labels: [],
            category: "Santé",
            id: "73325032-5b57-4c57-aeb9-2a6e564b7acf"
          },
          {
            labels: [],
            type: "expanse",
            date: 1628553600000,
            category: "Cadeaux et solidarité",
            amount: "10.00",
            id: "3fd1d848-3c24-40c0-963e-ec314c6df458"
          },
          {
            type: "expanse",
            amount: "194.63",
            labels: [],
            category: "Logement",
            date: 1628553600000,
            id: "379c1f6d-3d81-4095-8ee9-ab2b5f09d1e6"
          },
          {
            date: 1628553600000,
            amount: "78.30",
            labels: [],
            type: "expanse",
            category: "Auto & Moto",
            id: "2d7d078c-9c96-4403-84f8-905112b9ad21"
          },
          {
            amount: "6.70",
            labels: [],
            type: "expanse",
            date: 1628553600000,
            category: "Loisirs",
            id: "1ac409e7-d1c3-411a-a0b7-f159ea8cef7d"
          },
          {
            amount: "300.95",
            date: 1628467200000,
            labels: [],
            category: "Logement",
            type: "expanse",
            id: "ea93d8e5-cb2c-4af6-a29c-e88fe349e9ce"
          },
          {
            type: "expanse",
            date: 1628467200000,
            amount: "4.00",
            category: "Auto & Moto",
            labels: [],
            id: "c1248bf9-0485-4033-9dc2-75557e994f13"
          },
          {
            labels: [],
            type: "expanse",
            amount: "1.00",
            category: "Auto & Moto",
            date: 1628467200000,
            id: "a51059af-a158-4e1c-9402-2b2952cae3d2"
          },
          {
            amount: "1.00",
            date: 1628467200000,
            type: "expanse",
            category: "Auto & Moto",
            labels: [],
            id: "a381da82-cd88-48fc-b148-ca4718266385"
          },
          {
            category: "Auto & Moto",
            labels: [],
            date: 1628467200000,
            amount: "3.55",
            type: "expanse",
            id: "7a9f80bf-46aa-4947-b9da-dd4e2f0c7d99"
          },
          {
            date: 1628467200000,
            category: "Auto & Moto",
            type: "expanse",
            labels: [],
            amount: "1.00",
            id: "6413a64c-1398-4c14-b369-1bb629bb482d"
          },
          {
            type: "expanse",
            amount: "7.80",
            date: 1628467200000,
            labels: [],
            category: "Auto & Moto",
            id: "5e3eb9e4-0414-4c9a-861a-4b3b743f8503"
          },
          {
            date: 1628467200000,
            category: "Auto & Moto",
            amount: "1.00",
            type: "expanse",
            labels: [],
            id: "3f53c606-ec24-4744-ac18-1312adb26a33"
          },
          {
            type: "expanse",
            amount: "1.00",
            labels: [],
            date: 1628467200000,
            category: "Auto & Moto",
            id: "28867482-e4a9-4ad6-9473-a9fdfcf8df65"
          },
          {
            type: "income",
            amount: "565.34",
            category: "Santé",
            date: 1628208000000,
            labels: [],
            id: "d6f26821-543b-4783-a824-a560c09b2abe"
          },
          {
            labels: [],
            category: "Loisirs",
            date: 1628208000000,
            amount: "32.00",
            type: "expanse",
            id: "c04b3b02-6a9e-4f26-9211-25fb10fb1eeb"
          },
          {
            category: "Santé",
            date: 1628208000000,
            amount: "25.30",
            type: "expanse",
            labels: [],
            id: "a6e041b4-bc01-4458-a3d8-a6ce1c94f35d"
          },
          {
            type: "expanse",
            labels: [],
            date: 1628208000000,
            category: "Vie quotidienne",
            amount: "44.30",
            id: "a3c10a20-72cf-4525-8ad4-5d7e77cb7d97"
          },
          {
            date: 1628208000000,
            amount: "2.99",
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            id: "4822ce4b-3af0-4646-9314-9a0613c2ebcb"
          },
          {
            category: "Abonnements & téléphonie",
            type: "expanse",
            date: 1628121600000,
            amount: "14.99",
            labels: [],
            id: "95674993-1c0c-457f-9555-92790ca37a93"
          },
          {
            labels: [],
            type: "income",
            date: 1628121600000,
            category: "Santé",
            amount: "9.00",
            id: "3911c00c-debf-4244-813f-a260af09494c"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            amount: "0.35",
            date: 1628035200000,
            id: "66f48a2d-dfe3-4e4f-ac4b-9d8f37022aa8"
          },
          {
            labels: [],
            amount: "0.35",
            date: 1628035200000,
            type: "expanse",
            category: "Vie quotidienne",
            id: "23f10bf6-a313-43d3-a0f5-91889a3e5fab"
          },
          {
            labels: [],
            category: "Non catégorisé",
            type: "expanse",
            date: 1628035200000,
            amount: "24.00",
            id: "0ad62378-2432-4fff-ba0f-bbe952b2d1e7"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            labels: [],
            date: 1627948800000,
            amount: "11.42",
            id: "c097e5fe-4df8-4c6c-b9a0-4912088347dd"
          },
          {
            labels: [],
            type: "expanse",
            amount: "23.99",
            category: "Abonnements & téléphonie",
            date: 1627948800000,
            id: "867aa7b5-f0b0-45b6-b857-6950b90f6ba3"
          },
          {
            amount: "31.76",
            date: 1627862400000,
            category: "Auto & Moto",
            type: "expanse",
            labels: [],
            id: "ecc52d83-4b1c-4b2d-9507-ee443fe6f773"
          },
          {
            amount: "0.90",
            labels: [],
            category: "Loisirs",
            type: "expanse",
            date: 1627862400000,
            id: "c7d965a4-644b-49c6-94da-c124ce7b1202"
          },
          {
            type: "expanse",
            labels: [],
            date: 1627862400000,
            category: "Vie quotidienne",
            amount: "35.70",
            id: "7ebf7640-b819-47bc-ad88-276fe0f21520"
          },
          {
            amount: "2.50",
            labels: [],
            category: "Virements émis",
            type: "expanse",
            date: 1627862400000,
            id: "7ae0e07c-9cbf-4c9e-8ba7-8948fd9e8f47"
          },
          {
            labels: [],
            type: "expanse",
            category: "Virements émis",
            date: 1627862400000,
            amount: "980.00",
            id: "776770cc-6443-4b36-bae0-76ded9764ba7"
          },
          {
            type: "expanse",
            date: 1627862400000,
            amount: "1.10",
            labels: [],
            category: "Loisirs",
            id: "0fb40b8a-aefe-40a8-8fca-e77b0d533de8"
          },
          {
            amount: "9.00",
            date: 1627603200000,
            type: "expanse",
            category: "Santé",
            labels: [],
            id: "d8eebab6-4003-463f-8f1c-08e51b75d812"
          },
          {
            type: "expanse",
            category: "Auto & Moto",
            date: 1627516800000,
            labels: [],
            amount: "2.30",
            id: "bcdd313d-c368-45f3-a12c-f51a464e7c3e"
          },
          {
            date: 1627516800000,
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            amount: "11.88",
            id: "36852bfa-5c57-467a-91ad-938f4b030acf"
          },
          {
            amount: "50.00",
            date: 1627430400000,
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            id: "7365c49a-3e1a-45b1-8183-70fd759d777a"
          },
          {
            category: "Revenus du travail",
            date: 1627430400000,
            amount: "2058.32",
            labels: [],
            type: "income",
            id: "18ef07c7-94b5-47c2-8462-7628840d2e38"
          },
          {
            labels: [],
            amount: "238.39",
            type: "expanse",
            category: "Vie quotidienne",
            date: 1627344000000,
            id: "0b9da90a-f981-42e1-99ef-ba7382a3b4b8"
          },
          {
            amount: "8.10",
            category: "Non catégorisé",
            type: "expanse",
            labels: [],
            date: 1627257600000,
            id: "eafd04c4-c01d-4c90-9e1e-529a01a3d0d2"
          },
          {
            labels: [],
            date: 1627257600000,
            amount: "9.00",
            type: "income",
            category: "Santé",
            id: "ad42e705-e7d4-4469-af35-bd5788c15f7c"
          },
          {
            labels: [],
            type: "expanse",
            category: "Chèques",
            amount: "50.00",
            date: 1627257600000,
            id: "7661dfcc-9470-4600-ba7f-19d11f22686c"
          },
          {
            type: "expanse",
            date: 1627257600000,
            labels: [],
            amount: "30.80",
            category: "Non catégorisé",
            id: "7279b237-86bc-4fc5-963e-e2810ca09f70"
          },
          {
            date: 1627257600000,
            type: "expanse",
            labels: [],
            category: "Chèques",
            amount: "50.00",
            id: "56d8d5de-77f5-4e61-a2de-f2f4d755c7c5"
          },
          {
            type: "expanse",
            amount: "42.80",
            labels: [],
            category: "Loisirs",
            date: 1627257600000,
            id: "540191a6-2f77-4c73-bc00-413e94c4a21c"
          },
          {
            date: 1627257600000,
            category: "Non catégorisé",
            labels: [],
            amount: "5.00",
            type: "expanse",
            id: "45f1abd4-5a60-4778-98f2-20055b2e551b"
          },
          {
            labels: [],
            amount: "4.80",
            category: "Loisirs",
            type: "expanse",
            date: 1627257600000,
            id: "2eaf1353-14da-4e5d-b42b-56f6a77f1184"
          },
          {
            amount: "600.00",
            date: 1627257600000,
            type: "expanse",
            category: "Virements émis",
            labels: [],
            id: "1fa0df5b-2c26-4b5a-bd90-05ce802b5a44"
          },
          {
            amount: "10.40",
            labels: [],
            type: "income",
            category: "Santé",
            date: 1626998400000,
            id: "b4e28e52-cb18-49dc-b2bb-28610823edb8"
          },
          {
            type: "expanse",
            amount: "5.06",
            date: 1626998400000,
            category: "Vie quotidienne",
            labels: [],
            id: "34f249a6-d76b-4f83-bd1a-9fcb7284aac3"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            date: 1626912000000,
            amount: "27.67",
            type: "expanse",
            id: "c587e6de-991b-46bf-a6b4-eee1c00b70dd"
          },
          {
            labels: [],
            amount: "15.00",
            date: 1626912000000,
            category: "Cadeaux et solidarité",
            type: "expanse",
            id: "7baa579b-0e88-4987-b3c0-e6103c4a0d31"
          },
          {
            amount: "1.80",
            labels: [],
            date: 1626912000000,
            type: "expanse",
            category: "Loisirs",
            id: "472813e0-3854-4b9f-8804-5f7334276f63"
          },
          {
            date: 1626912000000,
            type: "income",
            labels: [],
            amount: "29.90",
            category: "Loisirs",
            id: "42eac4ed-1c37-494a-98a1-ff80e9c2603d"
          },
          {
            date: 1626825600000,
            category: "Vie quotidienne",
            amount: "60.13",
            labels: [],
            type: "expanse",
            id: "e6e01f98-d940-4d7c-9f1a-236dbc2ec779"
          },
          {
            labels: [],
            date: 1626825600000,
            amount: "15.60",
            category: "Santé",
            type: "income",
            id: "4cd589ac-f855-43d2-8ab1-dac2b72ac8fc"
          },
          {
            category: "Santé",
            date: 1626825600000,
            labels: [],
            type: "expanse",
            amount: "9.00",
            id: "4592bdf9-44e8-4ef2-9734-4d8dacd233dd"
          },
          {
            amount: "867.00",
            date: 1626739200000,
            labels: [],
            type: "income",
            category: "Virements reçus",
            id: "f0e932cf-64a2-4dc2-9881-b60bd8a8559d"
          },
          {
            date: 1626652800000,
            category: "Voyages & Transports",
            type: "expanse",
            amount: "47.95",
            labels: [],
            id: "efdbfda7-d1fa-4759-a8a1-f192b0883e77"
          },
          {
            type: "expanse",
            labels: [],
            amount: "34.30",
            date: 1626652800000,
            category: "Vie quotidienne",
            id: "c62e8968-4e0c-4aaa-9560-56a1bda4523f"
          },
          {
            date: 1626652800000,
            labels: [],
            type: "expanse",
            category: "Santé",
            amount: "6.54",
            id: "a568a01f-d48f-4d5a-979d-40fa5273e901"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            date: 1626652800000,
            amount: "58.77",
            id: "97cd1a11-9aee-4fb0-9755-aa3ecc59315b"
          },
          {
            date: 1626652800000,
            amount: "33.29",
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            id: "84f26440-715b-4135-90e7-75f2e81eab2e"
          },
          {
            type: "expanse",
            date: 1626652800000,
            labels: [],
            category: "Vie quotidienne",
            amount: "28.59",
            id: "6540e5fd-9a7c-4a65-bde9-699c264bdf53"
          },
          {
            category: "Chèques",
            labels: [],
            amount: "100.00",
            type: "expanse",
            date: 1626652800000,
            id: "5f57d3be-c608-437f-88cd-d783ca190dd4"
          },
          {
            labels: [],
            type: "expanse",
            date: 1626652800000,
            category: "Non catégorisé",
            amount: "26.00",
            id: "5b98f8de-55f8-4f63-ba99-591435e5335a"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            amount: "19.18",
            date: 1626652800000,
            type: "expanse",
            id: "3f60b4d9-976a-4567-b88f-05487380eba8"
          },
          {
            amount: "10.00",
            labels: [],
            date: 1626652800000,
            type: "expanse",
            category: "Services financiers & professionnels",
            id: "393b4b1f-3611-4b20-ac05-775b0df830cd"
          },
          {
            amount: "300.00",
            labels: [],
            type: "income",
            date: 1626652800000,
            category: "Virements reçus",
            id: "08559dac-0d91-41b4-a1ea-4c1c14be68d7"
          },
          {
            type: "expanse",
            date: 1626393600000,
            category: "Vie quotidienne",
            amount: "44.76",
            labels: [],
            id: "eeaaaad7-6703-4a72-889b-8feef9323322"
          },
          {
            type: "expanse",
            amount: "17.84",
            category: "Vie quotidienne",
            date: 1626393600000,
            labels: [],
            id: "6cca83e3-bf3d-470f-866b-867ae2547092"
          },
          {
            amount: "13.00",
            type: "expanse",
            date: 1626393600000,
            labels: [],
            category: "Impôts & Taxes",
            id: "633270e0-7d09-4353-bf13-fb7a3817655e"
          },
          {
            type: "expanse",
            amount: "20.00",
            date: 1626307200000,
            category: "Mouvements internes débiteurs",
            labels: [],
            id: "e156c9d8-49fb-4579-8f4c-c89bfcbc0a16"
          },
          {
            type: "expanse",
            date: 1626307200000,
            amount: "5.80",
            labels: [],
            category: "Loisirs",
            id: "98ba514f-6872-43fe-9191-ca6473f80f82"
          },
          {
            type: "expanse",
            date: 1626307200000,
            category: "Vie quotidienne",
            amount: "11.50",
            labels: [],
            id: "21aa77e3-0d99-4e36-912f-16ec643d7a3d"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            date: 1626134400000,
            labels: [],
            amount: "208.56",
            id: "9b06aace-2550-4eaf-a836-1a3456d49063"
          },
          {
            date: 1626134400000,
            amount: "38.20",
            category: "Non catégorisé",
            labels: [],
            type: "expanse",
            id: "7a3a742b-c3c9-436e-b5ff-7f273471c508"
          },
          {
            category: "Logement",
            type: "expanse",
            amount: "194.63",
            labels: [],
            date: 1626048000000,
            id: "bd2d11a0-6984-4a99-bbe6-9cb01b1cd7df"
          },
          {
            category: "Vie quotidienne",
            date: 1626048000000,
            labels: [],
            amount: "1.70",
            type: "expanse",
            id: "9d3ad1c5-1c6a-4e66-9b18-d6705c2c083e"
          },
          {
            type: "expanse",
            category: "Cadeaux et solidarité",
            date: 1626048000000,
            labels: [],
            amount: "10.00",
            id: "98cf3cae-7568-4702-88ad-4a6347d75f58"
          },
          {
            date: 1626048000000,
            type: "expanse",
            category: "Chèques",
            labels: [],
            amount: "50.00",
            id: "5bfa9cc4-11b4-4553-8d60-8b55219fec57"
          },
          {
            category: "Loisirs",
            amount: "13.90",
            labels: [],
            type: "expanse",
            date: 1626048000000,
            id: "4ee52973-8ed1-4a29-8fb4-69038dd30def"
          },
          {
            category: "Loisirs",
            type: "expanse",
            amount: "4.00",
            labels: [],
            date: 1626048000000,
            id: "1a0f0174-68e7-4b36-a85a-5df4d5fd4f28"
          },
          {
            category: "Logement",
            date: 1626048000000,
            amount: "16.00",
            labels: [],
            type: "expanse",
            id: "131d541d-efa5-45e3-be2c-9e848d867e5e"
          },
          {
            category: "Virements reçus",
            labels: [],
            type: "income",
            date: 1625788800000,
            amount: "300.00",
            id: "c68200db-3df1-427c-9f18-8c9fe5cad837"
          },
          {
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            date: 1625788800000,
            amount: "36.00",
            id: "a0626288-9938-45fa-9c11-34f1c6324808"
          },
          {
            amount: "109.00",
            type: "expanse",
            labels: [],
            date: 1625788800000,
            category: "Vie quotidienne",
            id: "9778529f-5376-4fa4-b507-8863b35bc95d"
          },
          {
            date: 1625788800000,
            labels: [],
            category: "Logement",
            type: "expanse",
            amount: "300.95",
            id: "95f3db4d-0f93-4d8c-8daf-352343a634dd"
          },
          {
            date: 1625702400000,
            amount: "47.85",
            category: "Loisirs",
            type: "expanse",
            labels: [],
            id: "e2639e10-6476-449e-a74a-898500cafc05"
          },
          {
            category: "Auto & Moto",
            amount: "65.41",
            date: 1625702400000,
            type: "expanse",
            labels: [],
            id: "a6c327ac-3340-4be5-bded-883debdd7f90"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            date: 1625702400000,
            amount: "2.42",
            type: "expanse",
            id: "5d5df200-ad79-4efc-b587-67d1c4a8d1ab"
          },
          {
            amount: "14.90",
            date: 1625702400000,
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            id: "3346e8c6-0186-4520-a1dd-68991785b554"
          },
          {
            date: 1625702400000,
            amount: "47.85",
            labels: [],
            type: "expanse",
            category: "Loisirs",
            id: "31bf37bd-7d4c-4be3-9d4a-6e5ad525e5d0"
          },
          {
            category: "Services financiers & professionnels",
            amount: "0.69",
            labels: [],
            date: 1625616000000,
            type: "expanse",
            id: "cf1b17f5-417e-4a63-8106-6750584be095"
          },
          {
            category: "Vie quotidienne",
            date: 1625616000000,
            type: "expanse",
            labels: [],
            amount: "10.00",
            id: "c33e6576-d451-4869-b53f-d2b33d2557f4"
          },
          {
            category: "Loisirs",
            type: "expanse",
            labels: [],
            date: 1625616000000,
            amount: "4.00",
            id: "aabd9348-42f2-4dd3-b768-5508d0fb67c9"
          },
          {
            labels: [],
            type: "expanse",
            date: 1625616000000,
            category: "Abonnements & téléphonie",
            amount: "14.99",
            id: "a49bfc1a-dd83-4060-8878-c421c526d8a5"
          },
          {
            labels: [],
            date: 1625616000000,
            category: "Santé",
            type: "income",
            amount: "515.53",
            id: "9925ebc0-2d34-4000-bc01-0560159a1f10"
          },
          {
            date: 1625616000000,
            category: "Vie quotidienne",
            amount: "12.51",
            type: "expanse",
            labels: [],
            id: "4e5a795f-3baf-4d74-81e9-47a757b2b8ca"
          },
          {
            type: "expanse",
            amount: "90.00",
            labels: [],
            category: "Virements émis",
            date: 1625616000000,
            id: "12606320-41d6-4d08-99a8-49d1af546b42"
          },
          {
            amount: "2.99",
            date: 1625529600000,
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            id: "8d3111dd-f475-4ec6-ad1a-011584e2a801"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            amount: "36.73",
            date: 1625443200000,
            type: "expanse",
            id: "fd49c445-89bb-4862-80b0-cda87a174590"
          },
          {
            date: 1625443200000,
            amount: "20.39",
            category: "Vie quotidienne",
            type: "expanse",
            labels: [],
            id: "fc775b93-eacd-4d66-8489-0a312ca502bd"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            date: 1625443200000,
            type: "expanse",
            amount: "20.00",
            id: "d2e1563b-48f6-46e1-9a32-4839b997e4e3"
          },
          {
            type: "expanse",
            date: 1625443200000,
            category: "Vie quotidienne",
            amount: "18.00",
            labels: [],
            id: "6fe80b8d-0a91-481a-8bd6-41689746cc12"
          },
          {
            date: 1625443200000,
            category: "Loisirs",
            amount: "4.30",
            type: "expanse",
            labels: [],
            id: "6e44be34-808d-4aa3-8d47-c75d4097fa88"
          },
          {
            category: "Vie quotidienne",
            date: 1625443200000,
            amount: "26.80",
            type: "expanse",
            labels: [],
            id: "619b164d-2034-4a44-b375-3f6f215c3271"
          },
          {
            category: "Vie quotidienne",
            date: 1625443200000,
            amount: "19.82",
            labels: [],
            type: "expanse",
            id: "3d328638-cee5-464c-a83c-504915b22e46"
          },
          {
            type: "expanse",
            amount: "50.00",
            date: 1625443200000,
            category: "Virements émis",
            labels: [],
            id: "3acbd10f-fc72-46a5-9bd5-77f8d3dd911a"
          },
          {
            category: "Vie quotidienne",
            amount: "7.80",
            labels: [],
            type: "expanse",
            date: 1625443200000,
            id: "1f0af76b-c6bb-4c75-8f87-5a5ed8035991"
          },
          {
            type: "expanse",
            date: 1625184000000,
            category: "Vie quotidienne",
            amount: "23.70",
            labels: [],
            id: "e7fb72cd-07d5-4845-9749-4e2e56ecd3d2"
          },
          {
            labels: [],
            date: 1625184000000,
            category: "Santé",
            type: "income",
            amount: "80.16",
            id: "28af6ffa-92f6-44aa-91a6-21a58d74d08a"
          },
          {
            labels: [],
            category: "Non catégorisé",
            type: "expanse",
            date: 1625184000000,
            amount: "38.20",
            id: "1f076547-bcfa-421e-bd8f-23739ba5c8ef"
          },
          {
            category: "Virements émis",
            date: 1625097600000,
            amount: "2.50",
            labels: [],
            type: "expanse",
            id: "9a0eb432-c5f6-4031-a0a2-cd7337095e45"
          },
          {
            date: 1625097600000,
            amount: "31.15",
            type: "expanse",
            labels: [],
            category: "Abonnements & téléphonie",
            id: "906283e2-0fe8-4986-a41a-19e0710adaf8"
          },
          {
            labels: [],
            type: "expanse",
            category: "Virements émis",
            amount: "980.00",
            date: 1625097600000,
            id: "8bb7c29c-7b13-4497-bb2a-cea12182e036"
          },
          {
            labels: [],
            amount: "16.99",
            type: "expanse",
            category: "Auto & Moto",
            date: 1625097600000,
            id: "6c29d0ef-6385-4ac9-ba86-7a8071ff8d72"
          },
          {
            category: "Virements reçus",
            date: 1624838400000,
            type: "income",
            amount: "1960.46",
            labels: [],
            id: "ff638ced-56b5-46a4-929e-27cb44d4f30e"
          },
          {
            date: 1624838400000,
            labels: [],
            category: "Loisirs",
            amount: "1.80",
            type: "expanse",
            id: "3f3b02da-8a20-4f1f-9152-1b218db56fe0"
          },
          {
            date: 1624838400000,
            type: "expanse",
            amount: "12.05",
            category: "Vie quotidienne",
            labels: [],
            id: "13cc4c15-c2f6-453a-bf09-69f23caa4f8e"
          },
          {
            category: "Santé",
            labels: [],
            type: "income",
            date: 1624838400000,
            amount: "29.74",
            id: "11bb7844-881c-4646-9adf-326c386e0bf2"
          },
          {
            labels: [],
            date: 1624579200000,
            category: "Chèques",
            type: "expanse",
            amount: "100.00",
            id: "2f33e4c0-82d1-4c21-a8b4-5b25a2af59e4"
          },
          {
            amount: "21.83",
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            date: 1624579200000,
            id: "1bda8e0d-2279-4bb3-8f5f-c62d3b6aac52"
          },
          {
            labels: [],
            type: "expanse",
            amount: "100.00",
            category: "Chèques",
            date: 1624579200000,
            id: "0284909a-9259-48ab-8d90-44fab564edd3"
          },
          {
            labels: [],
            amount: "31.79",
            category: "Vie quotidienne",
            date: 1624492800000,
            type: "expanse",
            id: "f6269d85-1bbf-49a4-bd2d-80857cb5b956"
          },
          {
            date: 1624492800000,
            category: "Virements reçus",
            type: "income",
            labels: [],
            amount: "300.00",
            id: "d1dadb8e-2add-4dd3-b8b9-492fb7cae10f"
          },
          {
            date: 1624492800000,
            labels: [],
            amount: "22.30",
            type: "expanse",
            category: "Vie quotidienne",
            id: "ceb0d376-280e-40be-81f1-22ad4d011839"
          },
          {
            date: 1624492800000,
            type: "expanse",
            labels: [],
            category: "Loisirs",
            amount: "47.85",
            id: "bf1d6b51-2eb4-4029-9831-1417df8ff9a7"
          },
          {
            labels: [],
            date: 1624492800000,
            amount: "9.90",
            type: "expanse",
            category: "Vie quotidienne",
            id: "a04efaf8-7a7d-4d6b-b4b0-0d1297fa9a8c"
          },
          {
            amount: "47.85",
            date: 1624492800000,
            category: "Loisirs",
            type: "expanse",
            labels: [],
            id: "7f6d26c2-d806-4b24-9a36-f2cbeda216d3"
          },
          {
            category: "Vie quotidienne",
            date: 1624492800000,
            type: "expanse",
            amount: "14.70",
            labels: [],
            id: "4c2c7cda-49e7-42d5-98f4-278be04a5c94"
          },
          {
            category: "Loisirs",
            amount: "23.30",
            labels: [],
            type: "expanse",
            date: 1624492800000,
            id: "1499dd5e-f6bc-4f79-9f95-afc8090d4739"
          },
          {
            type: "expanse",
            labels: [],
            date: 1624320000000,
            category: "Vie quotidienne",
            amount: "15.38",
            id: "d87dd203-acb7-461a-83bf-120b4f6094cc"
          },
          {
            amount: "29.74",
            date: 1624320000000,
            type: "expanse",
            category: "Santé",
            labels: [],
            id: "b2758d42-8ef2-4eb2-bc11-d5319234bf73"
          },
          {
            labels: [],
            category: "Virements émis",
            date: 1624320000000,
            amount: "100.00",
            type: "expanse",
            id: "4923e1c3-11b5-4ea2-a291-7c12f250d8fc"
          },
          {
            type: "expanse",
            amount: "38.70",
            labels: [],
            category: "Vie quotidienne",
            date: 1624233600000,
            id: "daaa74a9-f22d-458f-9e0f-3a75c20666c7"
          },
          {
            type: "expanse",
            date: 1624233600000,
            amount: "1.15",
            category: "Auto & Moto",
            labels: [],
            id: "c01658c3-bc74-43ae-9c98-eb65f0b95161"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            date: 1624233600000,
            amount: "4.34",
            type: "expanse",
            id: "8a867eef-03bf-49db-a39a-26d023f1290a"
          },
          {
            labels: [],
            category: "Santé",
            date: 1624233600000,
            amount: "22.08",
            type: "expanse",
            id: "64e592fc-301d-45a6-bc9a-3ea7c5eb3a73"
          },
          {
            amount: "4.30",
            category: "Auto & Moto",
            type: "expanse",
            labels: [],
            date: 1623974400000,
            id: "e24a3cb2-6944-4e11-9553-b4101fa4bbf4"
          },
          {
            category: "Loisirs",
            type: "expanse",
            date: 1623974400000,
            labels: [],
            amount: "1.00",
            id: "6b2612d6-5de8-4097-b49a-b46089ab4754"
          },
          {
            amount: "2.96",
            date: 1623888000000,
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            id: "c799b752-1d79-4362-80b3-638ecf36c886"
          },
          {
            date: 1623801600000,
            category: "Vie quotidienne",
            amount: "13.69",
            type: "expanse",
            labels: [],
            id: "9864e337-855c-4424-9d36-3c5c13f889a6"
          },
          {
            category: "Impôts & Taxes",
            date: 1623801600000,
            labels: [],
            amount: "13.00",
            type: "expanse",
            id: "4524309d-3420-45e5-9b6f-679fe6e955cf"
          },
          {
            date: 1623801600000,
            type: "expanse",
            labels: [],
            category: "Santé",
            amount: "9.99",
            id: "39256177-3fba-4a77-b19d-0a21871782c8"
          },
          {
            amount: "4.00",
            labels: [],
            date: 1623801600000,
            category: "Loisirs",
            type: "expanse",
            id: "19801e5d-4a07-4ab5-9724-5bf2b1b4bb02"
          },
          {
            type: "expanse",
            date: 1623715200000,
            labels: [],
            amount: "36.12",
            category: "Loisirs",
            id: "d2ac4b12-2c6c-4f6c-9a2c-b4ed50ccb6ac"
          },
          {
            date: 1623715200000,
            category: "Mouvements internes débiteurs",
            labels: [],
            amount: "20.00",
            type: "expanse",
            id: "a66b3a5f-7b7d-4370-a1c7-ce431c7185e5"
          },
          {
            category: "Vie quotidienne",
            date: 1623715200000,
            labels: [],
            type: "expanse",
            amount: "34.30",
            id: "9d055f87-ca8f-4592-a193-57638241f7be"
          },
          {
            date: 1623715200000,
            category: "Vie quotidienne",
            amount: "13.40",
            type: "expanse",
            labels: [],
            id: "9761d61f-8c19-41a7-95bd-15892f97558c"
          },
          {
            amount: "4.30",
            type: "expanse",
            category: "Auto & Moto",
            labels: [],
            date: 1623715200000,
            id: "4b6abe92-a9b0-4706-b569-9c42dc8296a9"
          },
          {
            date: 1623715200000,
            amount: "9.00",
            labels: [],
            category: "Chèques",
            type: "expanse",
            id: "2563ffe0-c435-42d3-b891-e06a564475bd"
          },
          {
            type: "expanse",
            amount: "10.98",
            labels: [],
            date: 1623628800000,
            category: "Vie quotidienne",
            id: "98f30fba-891e-4707-ba34-92f7e0150255"
          },
          {
            category: "Loisirs",
            type: "expanse",
            amount: "8.30",
            labels: [],
            date: 1623628800000,
            id: "2feab96e-c1ec-49b2-84de-668766f88fe6"
          },
          {
            category: "Santé",
            date: 1623628800000,
            amount: "9.00",
            type: "income",
            labels: [],
            id: "1c0c76d4-f656-45a3-8478-99440049e522"
          },
          {
            type: "expanse",
            date: 1623283200000,
            labels: [],
            category: "Vie quotidienne",
            amount: "30.79",
            id: "b4504362-a0c7-4013-9a76-968133a38fb2"
          },
          {
            category: "Santé",
            amount: "17.77",
            date: 1623283200000,
            labels: [],
            type: "expanse",
            id: "9d684ffc-ba82-4a11-8cc4-7b7309fe1a80"
          },
          {
            amount: "10.00",
            labels: [],
            date: 1623283200000,
            category: "Cadeaux et solidarité",
            type: "expanse",
            id: "8a114bee-03b0-45db-a9c3-578daddc31c7"
          },
          {
            amount: "16.00",
            date: 1623283200000,
            labels: [],
            category: "Logement",
            type: "expanse",
            id: "71f50172-fc5b-42e4-9273-6cb302e43c2e"
          },
          {
            type: "expanse",
            amount: "663.49",
            date: 1623283200000,
            category: "Logement",
            labels: [],
            id: "618f99c8-09d2-406e-a21b-8c4680fbc2aa"
          },
          {
            date: 1623196800000,
            labels: [],
            category: "Vie quotidienne",
            amount: "38.70",
            type: "expanse",
            id: "f59c801c-e2fd-49d4-a30c-6c52489fae34"
          },
          {
            labels: [],
            category: "Logement",
            date: 1623196800000,
            amount: "300.95",
            type: "expanse",
            id: "c5fca54d-1094-4721-b129-4a292495b8f7"
          },
          {
            type: "expanse",
            labels: [],
            amount: "164.99",
            date: 1623196800000,
            category: "Vie quotidienne",
            id: "b3387dba-35d8-41cf-ae1d-02652e91c0db"
          },
          {
            category: "Santé",
            date: 1623196800000,
            type: "expanse",
            amount: "3.70",
            labels: [],
            id: "ab136851-354b-4311-81b6-f80707ff4081"
          },
          {
            amount: "10.09",
            type: "expanse",
            date: 1623196800000,
            category: "Vie quotidienne",
            labels: [],
            id: "2ac00305-0160-48c9-80b3-7bf034e8a90b"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            amount: "12.04",
            type: "expanse",
            date: 1623196800000,
            id: "09677cd0-aee5-4b7c-8350-b0c646b72db6"
          },
          {
            amount: "7.50",
            labels: [],
            category: "Santé",
            type: "income",
            date: 1623110400000,
            id: "f21003f9-3d4e-4071-bc9a-9e20deaa23aa"
          },
          {
            labels: [],
            date: 1623110400000,
            type: "expanse",
            category: "Non catégorisé",
            amount: "14.99",
            id: "7a366c84-5629-4771-aaa6-8fb39c5e8408"
          },
          {
            date: 1623024000000,
            labels: [],
            category: "Vie quotidienne",
            amount: "75.12",
            type: "expanse",
            id: "f69ef475-e343-4280-bb62-3d8602b85416"
          },
          {
            amount: "29.99",
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            date: 1623024000000,
            id: "ddfbb48f-89b9-4c83-a144-2f9eba1e4b04"
          },
          {
            type: "expanse",
            labels: [],
            amount: "2.99",
            date: 1623024000000,
            category: "Vie quotidienne",
            id: "c4a0c870-2595-4301-af34-2e8a6b22342a"
          },
          {
            date: 1622764800000,
            amount: "29.00",
            type: "expanse",
            labels: [],
            category: "Non catégorisé",
            id: "fb494d12-c913-49e1-b096-277e2c1ab0e5"
          },
          {
            type: "expanse",
            amount: "2.00",
            date: 1622764800000,
            labels: [],
            category: "Loisirs",
            id: "bb2be66c-fb31-460a-a3ff-04e3739a3420"
          },
          {
            labels: [],
            category: "Abonnements & téléphonie",
            date: 1622592000000,
            amount: "13.00",
            type: "expanse",
            id: "b22f17a5-e756-457b-9347-1dd198d68fb5"
          },
          {
            labels: [],
            type: "expanse",
            amount: "34.20",
            category: "Loisirs",
            date: 1622592000000,
            id: "7f7098f1-0c0b-4fbc-952d-eec8a84a7883"
          },
          {
            date: 1622592000000,
            category: "Santé",
            amount: "7.50",
            labels: [],
            type: "expanse",
            id: "00468ff0-140c-41cf-96e0-45a959a07532"
          },
          {
            category: "Auto & Moto",
            amount: "31.76",
            labels: [],
            date: 1622505600000,
            type: "expanse",
            id: "ebe3741c-d5c8-42cd-8933-04713ff4b730"
          },
          {
            labels: [],
            category: "Virements émis",
            type: "expanse",
            amount: "980.00",
            date: 1622505600000,
            id: "dd701c1f-aca3-48bc-ba5d-14b94b3ebfc7"
          },
          {
            date: 1622505600000,
            labels: [],
            type: "expanse",
            category: "Virements émis",
            amount: "2.50",
            id: "dcec74fe-319c-4de6-a9e3-77262bfeae74"
          },
          {
            date: 1622419200000,
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            amount: "135.76",
            id: "a3b2cac7-9985-4231-ba68-9eda4fce4764"
          },
          {
            amount: "15.90",
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            date: 1622419200000,
            id: "5c369181-c5ec-4e0b-8661-716c70ff365e"
          },
          {
            amount: "89.85",
            date: 1622419200000,
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            id: "47912753-5872-4adb-89eb-0e3501890d58"
          },
          {
            labels: [],
            date: 1622419200000,
            type: "income",
            amount: "7.50",
            category: "Santé",
            id: "3dcfbd82-b610-478b-b3fe-dc413963fd23"
          },
          {
            type: "expanse",
            date: 1622160000000,
            amount: "68.60",
            labels: [],
            category: "Vie quotidienne",
            id: "9b3035ab-dfbc-4b93-9e82-fed26fd7e42d"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            amount: "19.99",
            date: 1622160000000,
            id: "2837d6bf-6434-4175-811d-43129aa85249"
          },
          {
            labels: [],
            date: 1622073600000,
            category: "Vie quotidienne",
            amount: "26.36",
            type: "expanse",
            id: "f1981dcd-d268-4179-a6bc-b0dc1ceddccf"
          },
          {
            amount: "2255.11",
            category: "Virements reçus",
            labels: [],
            date: 1622073600000,
            type: "income",
            id: "c645a362-5626-4166-8570-1531caa9fe02"
          },
          {
            date: 1622073600000,
            category: "Cadeaux et solidarité",
            type: "expanse",
            amount: "38.80",
            labels: [],
            id: "435f15f6-25d7-4c5b-82c3-78ad846a152f"
          },
          {
            amount: "19.50",
            labels: [],
            date: 1621987200000,
            category: "Vie quotidienne",
            type: "expanse",
            id: "9cbeb696-2237-45dc-a319-ea3a34bc8102"
          },
          {
            labels: [],
            date: 1621987200000,
            amount: "7.60",
            category: "Vie quotidienne",
            type: "expanse",
            id: "9849cffb-fade-4ed3-9a5b-ce3d9ebc5b2b"
          },
          {
            amount: "7.50",
            date: 1621987200000,
            category: "Santé",
            type: "expanse",
            labels: [],
            id: "52470481-5185-41d4-a79c-7a2b9942469f"
          },
          {
            date: 1621987200000,
            amount: "6.90",
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            id: "03f6c124-922d-4002-8242-18bf4663b356"
          },
          {
            category: "Vie quotidienne",
            labels: [],
            amount: "15.79",
            date: 1621900800000,
            type: "expanse",
            id: "f25b6047-5341-4bde-b54e-30c0a39d6e96"
          },
          {
            labels: [],
            amount: "34.30",
            date: 1621900800000,
            category: "Santé",
            type: "expanse",
            id: "f040d62b-f5f1-4478-bb9c-93aea74204f0"
          },
          {
            category: "Santé",
            labels: [],
            type: "income",
            date: 1621900800000,
            amount: "13.02",
            id: "e7da6631-6e9c-4e4a-92a7-5073fe242e90"
          },
          {
            date: 1621900800000,
            labels: [],
            amount: "11.94",
            type: "expanse",
            category: "Vie quotidienne",
            id: "8774f92d-6a44-4ac4-8e47-90194f8497ab"
          },
          {
            labels: [],
            amount: "30.36",
            date: 1621555200000,
            category: "Santé",
            type: "income",
            id: "cd1f7d0e-d656-404a-a311-b5e7b58aeb09"
          },
          {
            date: 1621555200000,
            amount: "25.00",
            labels: [],
            category: "Santé",
            type: "income",
            id: "a7c98aa2-2a97-4aa3-9b4a-bc98abff1e99"
          },
          {
            category: "Vie quotidienne",
            date: 1621468800000,
            labels: [],
            type: "expanse",
            amount: "29.06",
            id: "e0cd8c04-0432-478e-948f-4e2544079f7f"
          },
          {
            amount: "210.92",
            type: "expanse",
            labels: [],
            date: 1621382400000,
            category: "Vie quotidienne",
            id: "b24432bc-08a3-483a-80ab-8fc97bb3725c"
          },
          {
            type: "income",
            labels: [],
            date: 1621382400000,
            amount: "31.50",
            category: "Santé",
            id: "a4e36418-d7a2-478a-b2fe-7325ed39dad5"
          },
          {
            date: 1621296000000,
            labels: [],
            category: "Vie quotidienne",
            amount: "25.99",
            type: "expanse",
            id: "dc4d6668-b4d0-40f5-993c-48e2dfc6d5ee"
          },
          {
            type: "expanse",
            category: "Impôts & Taxes",
            date: 1621296000000,
            amount: "13.00",
            labels: [],
            id: "d0eed669-da22-4880-9b95-a957e4253970"
          },
          {
            date: 1621296000000,
            labels: [],
            category: "Vie quotidienne",
            amount: "12.99",
            type: "expanse",
            id: "63c6ff48-f7ee-4457-93c0-3ec57f56e85e"
          },
          {
            type: "expanse",
            date: 1621296000000,
            category: "Virements émis",
            amount: "100.00",
            labels: [],
            id: "2afd5c83-6bc3-4918-91bb-3ac2bedf4f5e"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            amount: "48.40",
            type: "expanse",
            date: 1621296000000,
            id: "273e1cc9-4828-43a5-8379-23f76ba8bfac"
          },
          {
            labels: [],
            type: "expanse",
            category: "Mouvements internes débiteurs",
            date: 1621209600000,
            amount: "20.00",
            id: "6995a316-481c-46c6-bff1-2034aa98bf6d"
          },
          {
            type: "expanse",
            category: "Loisirs",
            labels: [],
            amount: "29.90",
            date: 1621209600000,
            id: "388406d4-7a22-4828-8169-32cb57ae1557"
          },
          {
            category: "Santé",
            labels: [],
            type: "expanse",
            amount: "38.70",
            date: 1620950400000,
            id: "e42dcea6-1c36-4187-975d-6d22a73b280d"
          },
          {
            type: "expanse",
            category: "Auto & Moto",
            date: 1620950400000,
            labels: [],
            amount: "1.60",
            id: "9d8605a9-15e7-4b61-8624-a0fc77a951d9"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            labels: [],
            amount: "7.61",
            date: 1620950400000,
            id: "71b0c6d0-2de1-4fdf-9671-bab2104a3266"
          },
          {
            date: 1620950400000,
            type: "expanse",
            amount: "40.81",
            labels: [],
            category: "Voyages & Transports",
            id: "4e47408f-fa83-49db-b7c3-7890bc3715c7"
          },
          {
            category: "Santé",
            amount: "60.00",
            type: "expanse",
            date: 1620777600000,
            labels: [],
            id: "f82140c0-0c2d-4a93-a764-9a01ff8c34fc"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            amount: "42.50",
            type: "expanse",
            date: 1620777600000,
            id: "c420bbf1-013a-434a-8352-0dbd97c72706"
          },
          {
            type: "expanse",
            date: 1620777600000,
            labels: [],
            category: "Vie quotidienne",
            amount: "94.43",
            id: "62958cc9-f4a2-4ba6-ac2b-95d1ec12ea71"
          },
          {
            date: 1620777600000,
            amount: "43.38",
            type: "expanse",
            labels: [],
            category: "Santé",
            id: "4cf60697-699d-49b7-bf3f-bde1f9a44d84"
          },
          {
            type: "expanse",
            labels: [],
            date: 1620691200000,
            amount: "14.70",
            category: "Vie quotidienne",
            id: "cad44260-d4fd-4c23-ae2f-3abf661ee8b4"
          },
          {
            date: 1620691200000,
            labels: [],
            category: "Vie quotidienne",
            amount: "13.00",
            type: "expanse",
            id: "01804079-071f-469a-a9fe-690d38fcfb16"
          },
          {
            amount: "53.77",
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            date: 1620604800000,
            id: "f06e474e-dc07-4d24-b3e6-8db24e8afb98"
          },
          {
            date: 1620604800000,
            amount: "10.00",
            type: "expanse",
            labels: [],
            category: "Cadeaux et solidarité",
            id: "ea07016a-6e81-4a2e-824c-7707e760f82c"
          },
          {
            date: 1620604800000,
            type: "expanse",
            labels: [],
            amount: "16.00",
            category: "Logement",
            id: "e6c7b740-08cb-42e1-b897-c31f0c23e72e"
          },
          {
            date: 1620604800000,
            type: "expanse",
            labels: [],
            amount: "300.95",
            category: "Logement",
            id: "e66f426b-9a02-4c37-9853-fff6d5813d2b"
          },
          {
            labels: [],
            amount: "36.40",
            date: 1620604800000,
            type: "expanse",
            category: "Auto & Moto",
            id: "5c7bc8f7-666c-42ee-96bd-f1bcb9fdd237"
          },
          {
            type: "expanse",
            category: "Logement",
            date: 1620604800000,
            amount: "130.00",
            labels: [],
            id: "31e5d7b7-fabb-44e3-9fa1-2498d409cbb5"
          },
          {
            type: "expanse",
            amount: "25.40",
            date: 1620604800000,
            labels: [],
            category: "Vie quotidienne",
            id: "14f8a8be-facf-48fc-a8fa-fefefb17ea0f"
          },
          {
            category: "Virements reçus",
            date: 1620604800000,
            amount: "100.00",
            type: "income",
            labels: [],
            id: "0f554eb7-6887-444e-84df-49e4633301ae"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            amount: "255.99",
            date: 1620345600000,
            id: "c7eb809c-9f77-418b-bc40-77ba0c33769c"
          },
          {
            date: 1620345600000,
            category: "Loisirs",
            labels: [],
            type: "expanse",
            amount: "47.85",
            id: "c1fee869-8c9e-4374-8500-0df4c7c72baf"
          },
          {
            amount: "47.85",
            date: 1620345600000,
            labels: [],
            type: "expanse",
            category: "Loisirs",
            id: "985d57a0-c004-4ca2-95ef-a7b0e7e082c4"
          },
          {
            labels: [],
            category: "Santé",
            date: 1620259200000,
            amount: "40.00",
            type: "income",
            id: "e534ec69-ca8c-4202-9c22-b75a535ffb24"
          },
          {
            type: "expanse",
            amount: "29.60",
            labels: [],
            category: "Vie quotidienne",
            date: 1620259200000,
            id: "d5ea2f2e-6d17-4ae1-b7ab-943de48a38a6"
          },
          {
            amount: "150.00",
            date: 1620259200000,
            labels: [],
            category: "Virements reçus",
            type: "income",
            id: "aec5febe-8f82-4cc1-bbdc-c00c1596875c"
          },
          {
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            amount: "2.99",
            date: 1620259200000,
            id: "7d141ae9-2e47-435f-8827-2411b99a2e07"
          },
          {
            amount: "17.99",
            date: 1620259200000,
            category: "Vie quotidienne",
            type: "expanse",
            labels: [],
            id: "62dd4e44-bbd6-44c3-a2c4-0c371c304910"
          },
          {
            date: 1620259200000,
            labels: [],
            amount: "3.30",
            category: "Loisirs",
            type: "expanse",
            id: "378db2f9-3e17-4d2a-aa47-5d2eb520af83"
          },
          {
            type: "expanse",
            labels: [],
            amount: "14.99",
            category: "Abonnements & téléphonie",
            date: 1620259200000,
            id: "2048d29a-8499-4c18-bd45-04693792f446"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            date: 1620172800000,
            amount: "34.13",
            type: "expanse",
            id: "b558e0fa-1f73-4c97-b4eb-5b4ada78b399"
          },
          {
            type: "expanse",
            labels: [],
            date: 1620086400000,
            category: "Vie quotidienne",
            amount: "39.99",
            id: "fc40363c-d29e-467e-aa20-826b112c8a01"
          },
          {
            type: "expanse",
            amount: "101.27",
            date: 1620086400000,
            labels: [],
            category: "Vie quotidienne",
            id: "1ee01424-8f55-4412-97b6-8cc16f7a99e2"
          },
          {
            type: "expanse",
            category: "Abonnements & téléphonie",
            date: 1620000000000,
            amount: "15.29",
            labels: [],
            id: "ebe8fb68-1520-4a51-b314-e1af1ed6cefb"
          },
          {
            category: "Vie quotidienne",
            date: 1620000000000,
            labels: [],
            type: "expanse",
            amount: "44.30",
            id: "d25a33bc-4ef0-4b65-bacb-b8705cb20b74"
          },
          {
            category: "Virements émis",
            date: 1620000000000,
            labels: [],
            type: "expanse",
            amount: "2.50",
            id: "a4d396b1-0ca4-4e4e-9542-4d70eec142b7"
          },
          {
            type: "expanse",
            amount: "980.00",
            date: 1620000000000,
            category: "Virements émis",
            labels: [],
            id: "a19dd10d-b2f6-4383-8bc3-bc471686b6d5"
          },
          {
            category: "Vie quotidienne",
            labels: [],
            amount: "13.80",
            date: 1620000000000,
            type: "expanse",
            id: "9fd46d76-14ef-48a5-b27a-e248f05c58a8"
          },
          {
            category: "Auto & Moto",
            amount: "31.76",
            type: "expanse",
            labels: [],
            date: 1620000000000,
            id: "74b81537-0909-4376-bb83-295d21774714"
          },
          {
            type: "expanse",
            amount: "26.79",
            date: 1620000000000,
            category: "Vie quotidienne",
            labels: [],
            id: "2fcdf80f-4582-434c-b7f7-48273817972b"
          },
          {
            category: "Vie quotidienne",
            amount: "13.20",
            type: "expanse",
            date: 1620000000000,
            labels: [],
            id: "1d125724-37ef-4c0e-89c0-fe12437910ba"
          },
          {
            labels: [],
            amount: "27.20",
            date: 1619740800000,
            type: "expanse",
            category: "Vie quotidienne",
            id: "e2515f31-163f-4c0d-9269-389fcc0431fe"
          },
          {
            category: "Virements reçus",
            date: 1619568000000,
            type: "income",
            amount: "2229.35",
            labels: [],
            id: "e6234cf9-4463-4f3c-9939-f22c9133e7e2"
          },
          {
            category: "Loisirs",
            type: "expanse",
            date: 1619568000000,
            labels: [],
            amount: "74.00",
            id: "41ee47da-acad-4f74-bad6-4916babedf0d"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            date: 1619481600000,
            amount: "156.66",
            id: "ca63f116-1a75-4354-ba9f-bd3ae67bf834"
          },
          {
            amount: "55.36",
            category: "Vie quotidienne",
            type: "expanse",
            date: 1619481600000,
            labels: [],
            id: "9a0fdb43-294b-40b9-9273-4e9f0b25cbc5"
          },
          {
            amount: "12.00",
            labels: [],
            category: "Vie quotidienne",
            date: 1619481600000,
            type: "expanse",
            id: "855c5a5f-eb32-4383-b4ee-4590a463983a"
          },
          {
            type: "income",
            labels: [],
            date: 1619395200000,
            amount: "42.00",
            category: "Vie quotidienne",
            id: "f8bd39b4-f0b3-4191-a37f-bf6c0e6bd3fa"
          },
          {
            date: 1619395200000,
            type: "expanse",
            amount: "42.00",
            category: "Non catégorisé",
            labels: [],
            id: "d85fa115-35dd-4a2d-ab13-94ec4758386a"
          },
          {
            amount: "26.06",
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            date: 1619395200000,
            id: "d6290d27-3678-4d87-b2a4-3c52744ec019"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            amount: "7.99",
            date: 1619395200000,
            id: "c78d070e-28da-432c-bd7c-d1ede55c793f"
          },
          {
            date: 1619395200000,
            amount: "4.26",
            type: "income",
            category: "Vie quotidienne",
            labels: [],
            id: "ab496c4f-c173-42e5-b62c-c20fb5f1de00"
          },
          {
            category: "Santé",
            date: 1619395200000,
            labels: [],
            amount: "35.00",
            type: "income",
            id: "49b44f69-a70e-421c-8cfe-d9721a9dad86"
          },
          {
            labels: [],
            date: 1619395200000,
            type: "expanse",
            category: "Vie quotidienne",
            amount: "21.60",
            id: "21ba23a7-b9cb-4a2e-b19d-6c54e9db9b08"
          },
          {
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            date: 1619136000000,
            amount: "14.49",
            id: "9dee836b-b86d-43c3-bdbc-fe60f9bdf43a"
          },
          {
            type: "expanse",
            labels: [],
            date: 1619136000000,
            amount: "34.30",
            category: "Vie quotidienne",
            id: "9be4d2bc-b540-4a43-80cd-1cde8a7ba741"
          },
          {
            date: 1619049600000,
            type: "expanse",
            amount: "10.41",
            category: "Santé",
            labels: [],
            id: "f747c66d-c94d-4a67-b238-19bcbe41983d"
          },
          {
            labels: [],
            category: "Santé",
            amount: "27.50",
            type: "income",
            date: 1619049600000,
            id: "dd9831c3-ffb0-4e36-b7d5-651ad41adc8b"
          },
          {
            category: "Chèques",
            type: "expanse",
            date: 1619049600000,
            labels: [],
            amount: "300.00",
            id: "d556e915-acb5-43fb-8127-230342726e34"
          },
          {
            date: 1618963200000,
            category: "Santé",
            amount: "1.00",
            labels: [],
            type: "expanse",
            id: "d633c3cc-c878-441e-b91f-156f9ec57dfe"
          },
          {
            amount: "18.24",
            labels: [],
            date: 1618963200000,
            category: "Vie quotidienne",
            type: "expanse",
            id: "bb58bdf8-9810-46a7-a3e1-4ae218a221d5"
          },
          {
            type: "expanse",
            category: "Santé",
            labels: [],
            date: 1618876800000,
            amount: "70.00",
            id: "c7c331c2-eca3-4e07-bbc1-181ab10d0fe4"
          },
          {
            date: 1618876800000,
            amount: "3.67",
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            id: "892441a9-a83d-4eb0-bf97-f8df46634ccb"
          },
          {
            category: "Vie quotidienne",
            amount: "43.70",
            date: 1618790400000,
            type: "expanse",
            labels: [],
            id: "35fdb82c-972b-4642-899c-5f884624df21"
          },
          {
            amount: "13.25",
            type: "expanse",
            labels: [],
            date: 1618790400000,
            category: "Vie quotidienne",
            id: "30fbc606-4036-4b69-ad39-f9c70781569a"
          },
          {
            labels: [],
            category: "Auto & Moto",
            date: 1618790400000,
            amount: "53.00",
            type: "expanse",
            id: "0cb4e4d9-3807-498b-b249-e319ecc62c73"
          },
          {
            labels: [],
            date: 1618531200000,
            category: "Impôts & Taxes",
            type: "expanse",
            amount: "13.00",
            id: "e07ad72f-37a8-4604-8c74-792817b70407"
          },
          {
            amount: "27.50",
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            date: 1618531200000,
            id: "cc421cb2-4953-4483-bb70-07c5126cd9a7"
          },
          {
            category: "Vie quotidienne",
            amount: "38.70",
            labels: [],
            date: 1618531200000,
            type: "expanse",
            id: "bd7814d8-5647-4766-bcad-9b6e5ec3b69f"
          },
          {
            type: "income",
            date: 1618531200000,
            category: "Vie quotidienne",
            labels: [],
            amount: "18.64",
            id: "8cc79b8d-116f-422d-900c-dc4931ec011d"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            amount: "204.46",
            type: "expanse",
            date: 1618531200000,
            id: "57d490ff-9f91-4aee-9db2-0fbfb2dc4675"
          },
          {
            amount: "15.92",
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            date: 1618531200000,
            id: "1e449708-555a-4801-8371-0339de86e909"
          },
          {
            date: 1618444800000,
            type: "expanse",
            labels: [],
            category: "Mouvements internes débiteurs",
            amount: "20.00",
            id: "90dea541-e360-4c94-8d9b-1152bd9a2304"
          },
          {
            type: "expanse",
            amount: "33.00",
            labels: [],
            category: "Vie quotidienne",
            date: 1618358400000,
            id: "dcf69fe0-ef25-4890-aaa3-8c16e46eb9c5"
          },
          {
            date: 1618185600000,
            category: "Vie quotidienne",
            amount: "34.30",
            type: "expanse",
            labels: [],
            id: "8f79a0a7-f98b-4888-b706-cb82fb1d49a5"
          },
          {
            type: "expanse",
            labels: [],
            category: "Logement",
            amount: "20.00",
            date: 1618185600000,
            id: "60b619c9-516c-4c4c-ae07-cc9dd25c7662"
          },
          {
            labels: [],
            category: "Logement",
            amount: "16.00",
            type: "expanse",
            date: 1618185600000,
            id: "5a1e4e38-3595-4ab8-b8de-2aae7be59e72"
          },
          {
            labels: [],
            type: "expanse",
            amount: "50.00",
            category: "Virements émis",
            date: 1618185600000,
            id: "4c4c9765-d9a6-471b-9a39-761983e80947"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            date: 1618185600000,
            amount: "22.05",
            id: "19232f8f-024b-4fd2-a62f-b6a96b8c979d"
          },
          {
            amount: "9.85",
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            date: 1618185600000,
            id: "101a4f06-0cfa-4bfb-9a90-f43c92f343c5"
          },
          {
            type: "expanse",
            labels: [],
            amount: "10.00",
            date: 1618185600000,
            category: "Cadeaux et solidarité",
            id: "0910248c-b8c5-4301-8bcb-987b15106182"
          },
          {
            type: "expanse",
            date: 1617926400000,
            amount: "300.95",
            category: "Logement",
            labels: [],
            id: "9a69a8e3-2a6e-4908-b768-f9ccf3d3cdc7"
          },
          {
            amount: "14.99",
            type: "expanse",
            labels: [],
            category: "Abonnements & téléphonie",
            date: 1617926400000,
            id: "8ced6326-7616-44db-bd40-08482cb3e323"
          },
          {
            type: "expanse",
            date: 1617926400000,
            amount: "11.90",
            labels: [],
            category: "Vie quotidienne",
            id: "674d13bc-f31c-4664-bd23-12d52ddee1d7"
          },
          {
            type: "expanse",
            amount: "14.70",
            category: "Non catégorisé",
            date: 1617926400000,
            labels: [],
            id: "3470bfb3-cac3-4d4e-ae66-d758494a92cc"
          },
          {
            date: 1617926400000,
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            amount: "61.09",
            id: "06b443ea-4cb5-407e-b232-eac9bc44cdc4"
          },
          {
            date: 1617840000000,
            amount: "12.15",
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            id: "9a00059b-f18f-49f5-8a87-e248d9a53492"
          },
          {
            labels: [],
            category: "Santé",
            type: "income",
            date: 1617840000000,
            amount: "857.00",
            id: "128625a5-1267-475b-a16e-d365f44176bf"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            amount: "6.99",
            labels: [],
            date: 1617753600000,
            id: "f754305d-52c3-4174-841a-858a3abf2a57"
          },
          {
            category: "Abonnements & téléphonie",
            labels: [],
            amount: "13.68",
            type: "expanse",
            date: 1617753600000,
            id: "b7cacf74-be6e-4954-a486-e86253b1a5bf"
          },
          {
            labels: [],
            type: "expanse",
            date: 1617753600000,
            category: "Vie quotidienne",
            amount: "175.72",
            id: "87d38fb6-98ce-4716-ab6b-35f3707f6145"
          },
          {
            labels: [],
            type: "expanse",
            amount: "62.70",
            category: "Santé",
            date: 1617753600000,
            id: "78f0775f-60be-4d3a-999f-cdd21f6feec4"
          },
          {
            amount: "100.00",
            type: "income",
            labels: [],
            date: 1617667200000,
            category: "Virements reçus",
            id: "cd5e647f-3c1c-4c24-a132-a8d08cb0246f"
          },
          {
            amount: "47.99",
            date: 1617667200000,
            type: "expanse",
            labels: [],
            category: "Non catégorisé",
            id: "cc9130ef-71a7-4217-afd5-cadee6b80935"
          },
          {
            amount: "24.70",
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            date: 1617667200000,
            id: "c19d7b8e-1376-4051-b237-0be304847ef4"
          },
          {
            labels: [],
            date: 1617667200000,
            type: "expanse",
            amount: "47.85",
            category: "Loisirs",
            id: "bbed7b8a-d2c8-4daf-9f77-185c6067b3b8"
          },
          {
            labels: [],
            type: "expanse",
            amount: "47.85",
            date: 1617667200000,
            category: "Loisirs",
            id: "b39ce33e-8e47-4b09-808d-867dffdf4fba"
          },
          {
            category: "Vie quotidienne",
            date: 1617667200000,
            type: "expanse",
            amount: "2.99",
            labels: [],
            id: "85b65c04-9fc5-4db8-8c06-71639bc2e53a"
          },
          {
            category: "Loisirs",
            amount: "4.40",
            date: 1617667200000,
            type: "expanse",
            labels: [],
            id: "7560326b-cdf0-478f-acc6-979fc9b15278"
          },
          {
            date: 1617235200000,
            type: "income",
            labels: [],
            category: "Santé",
            amount: "7.50",
            id: "daee27bd-969a-4c60-baf3-ac7ff9a16584"
          },
          {
            type: "expanse",
            date: 1617235200000,
            category: "Virements émis",
            labels: [],
            amount: "2.50",
            id: "d4d79ccd-a6bf-4ecc-978a-a3431a780844"
          },
          {
            type: "expanse",
            date: 1617235200000,
            amount: "31.76",
            category: "Auto & Moto",
            labels: [],
            id: "c669d0b2-825c-45ff-a84f-fc6861aa3f7f"
          },
          {
            date: 1617235200000,
            category: "Virements émis",
            amount: "980.00",
            labels: [],
            type: "expanse",
            id: "813ad6cd-9014-40d1-a08c-2b7029969528"
          },
          {
            labels: [],
            date: 1617148800000,
            category: "Vie quotidienne",
            type: "expanse",
            amount: "22.79",
            id: "f1b4dd77-5784-41dd-bb6f-8d5e1f3fcf5a"
          },
          {
            category: "Vie quotidienne",
            labels: [],
            date: 1617148800000,
            amount: "33.00",
            type: "expanse",
            id: "e4ca39cf-518c-450c-a3ad-2215b6f0ff37"
          },
          {
            labels: [],
            type: "expanse",
            category: "Chèques",
            date: 1617148800000,
            amount: "27.60",
            id: "496da9f7-5187-4587-841d-56eaf0192407"
          },
          {
            labels: [],
            date: 1617148800000,
            category: "Vie quotidienne",
            type: "expanse",
            amount: "38.70",
            id: "47abcc3f-853b-4062-83a3-1ad454199fec"
          },
          {
            type: "expanse",
            amount: "31.30",
            date: 1617062400000,
            category: "Santé",
            labels: [],
            id: "9614ccc0-003b-4101-90a8-8e7182560b71"
          },
          {
            type: "income",
            labels: [],
            amount: "30.00",
            date: 1617062400000,
            category: "Dépots (cartes/chèques/espèces)",
            id: "505ccd40-68d5-43e4-9045-ccac35880acc"
          },
          {
            date: 1616976000000,
            type: "expanse",
            labels: [],
            amount: "64.42",
            category: "Vie quotidienne",
            id: "5e66d43b-1597-40ff-b6c3-cdccbaf43564"
          },
          {
            labels: [],
            date: 1616976000000,
            category: "Revenus du travail",
            amount: "2302.47",
            type: "income",
            id: "468ee7b7-b695-472d-92b5-eae6d6970dbf"
          },
          {
            date: 1616976000000,
            category: "Auto & Moto",
            amount: "4.62",
            type: "expanse",
            labels: [],
            id: "09125f0f-4d56-4136-8400-1f2509641f13"
          },
          {
            amount: "148.93",
            date: 1616716800000,
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            id: "d63f2682-8b35-4341-8551-1934ac982c7f"
          },
          {
            date: 1616716800000,
            category: "Vie quotidienne",
            labels: [],
            amount: "50.79",
            type: "expanse",
            id: "a44ce321-7f7e-46bb-80da-de27cefb548c"
          },
          {
            category: "Santé",
            date: 1616716800000,
            type: "expanse",
            labels: [],
            amount: "7.50",
            id: "8993770c-d604-4577-b141-6fb5281705cb"
          },
          {
            date: 1616630400000,
            labels: [],
            type: "expanse",
            amount: "42.50",
            category: "Santé",
            id: "7317a49f-3e9f-4c80-8b3d-659e27cd2748"
          },
          {
            date: 1616544000000,
            category: "Vie quotidienne",
            amount: "35.40",
            labels: [],
            type: "expanse",
            id: "e141ebb0-bca8-491c-919c-6e55cb0498f3"
          },
          {
            category: "Vie quotidienne",
            amount: "12.86",
            labels: [],
            date: 1616544000000,
            type: "expanse",
            id: "813c542b-7cfd-451d-bd78-e3dc1169bb4a"
          },
          {
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            date: 1616457600000,
            amount: "8.38",
            id: "51431f6a-6f7d-4c47-857e-398c907c58bb"
          },
          {
            amount: "50.00",
            labels: [],
            type: "expanse",
            category: "Virements émis",
            date: 1616457600000,
            id: "05de022e-ae1e-48b6-b253-a1b5820c7693"
          },
          {
            amount: "173.78",
            date: 1616371200000,
            category: "Auto & Moto",
            type: "expanse",
            labels: [],
            id: "eb575a2c-67ec-4c19-84d0-50b41b29d25f"
          },
          {
            amount: "68.60",
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            date: 1616371200000,
            id: "e99a0cb2-75ed-4e54-80f2-562b038bbe58"
          },
          {
            date: 1616371200000,
            amount: "7.64",
            category: "Vie quotidienne",
            type: "expanse",
            labels: [],
            id: "a1d9187e-ec33-4bac-9f1e-634300c0778a"
          },
          {
            labels: [],
            date: 1616371200000,
            category: "Santé",
            type: "income",
            amount: "857.00",
            id: "9aa1d15c-d4e5-476c-9f49-727798f0c7ef"
          },
          {
            type: "expanse",
            date: 1616371200000,
            amount: "9.85",
            labels: [],
            category: "Vie quotidienne",
            id: "9048fbc0-8c55-4f00-b4f0-3dec91f9ba8d"
          },
          {
            type: "income",
            date: 1616112000000,
            labels: [],
            category: "Virements reçus",
            amount: "200.00",
            id: "3388490d-76ae-415b-912b-8ca0db674155"
          },
          {
            labels: [],
            amount: "10.16",
            date: 1615939200000,
            type: "expanse",
            category: "Vie quotidienne",
            id: "67de492a-c9ea-49e3-a170-f0f627c4853e"
          },
          {
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            amount: "29.01",
            date: 1615939200000,
            id: "2535b47f-d3da-4181-90d0-1682a9159ae9"
          },
          {
            date: 1615939200000,
            amount: "35.70",
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            id: "10aae68a-2afa-4e87-9e1f-841622b0dfb2"
          },
          {
            type: "expanse",
            labels: [],
            category: "Voyages & Transports",
            date: 1615852800000,
            amount: "38.70",
            id: "e38a9f14-8fc5-4b59-8101-8c865f51f74a"
          },
          {
            labels: [],
            type: "expanse",
            amount: "13.00",
            category: "Impôts & Taxes",
            date: 1615852800000,
            id: "0fdcf66b-b0ed-4b64-8e67-a4b728e63e5f"
          },
          {
            category: "Virements reçus",
            amount: "300.00",
            labels: [],
            type: "income",
            date: 1615766400000,
            id: "e7a19a98-727b-4add-8cb4-f9a2bad2b022"
          },
          {
            labels: [],
            type: "expanse",
            category: "Dépenses d'épargne",
            amount: "20.00",
            date: 1615766400000,
            id: "aa48ee09-0e68-4bbf-b94b-2ee694ba5de1"
          },
          {
            date: 1615766400000,
            amount: "25.42",
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            id: "80d918f9-3743-48bd-b650-1c750eb6636d"
          },
          {
            labels: [],
            amount: "213.41",
            date: 1615766400000,
            type: "expanse",
            category: "Vie quotidienne",
            id: "7a93f720-59b8-4667-9971-add97064d38b"
          },
          {
            category: "Vie quotidienne",
            labels: [],
            amount: "33.56",
            type: "expanse",
            date: 1615507200000,
            id: "c8ef197d-f920-4097-95f8-ab731dc33637"
          },
          {
            labels: [],
            date: 1615507200000,
            type: "expanse",
            category: "Vie quotidienne",
            amount: "9.99",
            id: "c5b9159a-3909-4d06-813f-4c8fdf0d9da8"
          },
          {
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            date: 1615507200000,
            amount: "18.64",
            id: "8b9c384a-9005-44d5-b8a3-3a18a3e71024"
          },
          {
            type: "expanse",
            labels: [],
            date: 1615507200000,
            category: "Santé",
            amount: "7.86",
            id: "271f058a-4949-4511-b0b6-2e02c860af40"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            date: 1615420800000,
            amount: "11.77",
            id: "89201e4a-a9b4-419b-992a-c3daaae7ffa7"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            date: 1615420800000,
            amount: "49.99",
            labels: [],
            id: "7efc8804-4c90-4b14-b085-11f2ccfcd688"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            labels: [],
            date: 1615420800000,
            amount: "35.60",
            id: "45cdd8eb-2d2a-4a66-b7e0-d0322661c075"
          },
          {
            amount: "3.30",
            date: 1615334400000,
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            id: "fb98fbd6-784e-4a74-9aef-be1d1bcde1b8"
          },
          {
            type: "expanse",
            labels: [],
            date: 1615334400000,
            amount: "89.75",
            category: "Santé",
            id: "ac18c0de-833e-450f-813c-5da85823287f"
          },
          {
            amount: "59.15",
            category: "Auto & Moto",
            type: "expanse",
            labels: [],
            date: 1615334400000,
            id: "65ae3f7b-7b9e-4bcf-a4fe-b7a5ccc79c22"
          },
          {
            amount: "10.00",
            category: "Cadeaux et solidarité",
            type: "expanse",
            labels: [],
            date: 1615334400000,
            id: "532dc6b4-3095-468e-93ef-b9acdb876c58"
          },
          {
            type: "expanse",
            date: 1615334400000,
            amount: "80.00",
            category: "Auto & Moto",
            labels: [],
            id: "4d9edcad-e559-4c97-89da-829a532b3571"
          },
          {
            category: "Vie quotidienne",
            amount: "36.47",
            labels: [],
            date: 1615334400000,
            type: "expanse",
            id: "259b4825-6e9e-4b43-982d-7af38ee3bd28"
          },
          {
            category: "Virements reçus",
            labels: [],
            type: "income",
            date: 1615248000000,
            amount: "100.00",
            id: "f5b56f00-cef4-47ca-b285-b28cf7077356"
          },
          {
            date: 1615248000000,
            type: "expanse",
            category: "Virements émis",
            amount: "100.00",
            labels: [],
            id: "d1be5839-636b-4a1d-8c17-ac3e4095ae54"
          },
          {
            amount: "300.95",
            labels: [],
            category: "Logement",
            type: "expanse",
            date: 1615248000000,
            id: "cbf86ce4-b6c2-4bb4-8a70-75ffdb9145af"
          },
          {
            date: 1615248000000,
            amount: "19.90",
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            id: "0d2c2781-2b94-4c34-b7fa-900afa354011"
          },
          {
            amount: "32.00",
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            date: 1615161600000,
            id: "f00fa167-d22f-4b21-b5f7-03778e6c2ff8"
          },
          {
            type: "expanse",
            labels: [],
            category: "Loisirs",
            date: 1615161600000,
            amount: "32.00",
            id: "b9ed4f03-3e3a-4d80-8a95-affe892a1ad1"
          },
          {
            date: 1615161600000,
            category: "Loisirs",
            labels: [],
            type: "expanse",
            amount: "2.99",
            id: "951049e1-88cd-4523-bdfd-74823ab1b9af"
          },
          {
            type: "expanse",
            labels: [],
            date: 1615161600000,
            category: "Abonnements & téléphonie",
            amount: "14.99",
            id: "62c65572-27bd-4dae-bf0e-05d2484dff1a"
          },
          {
            category: "Auto & Moto",
            labels: [],
            type: "expanse",
            date: 1614902400000,
            amount: "173.15",
            id: "ce82c22c-374a-4398-9e47-e754ff5d6f18"
          },
          {
            amount: "170.40",
            category: "Auto & Moto",
            date: 1614902400000,
            labels: [],
            type: "expanse",
            id: "4208f7f6-0838-48e5-a105-8279e3c208d1"
          },
          {
            date: 1614816000000,
            amount: "20.33",
            labels: [],
            type: "expanse",
            category: "Abonnements & téléphonie",
            id: "15999cad-f6b2-4092-a17c-66002ae0a3c5"
          },
          {
            type: "expanse",
            date: 1614729600000,
            amount: "32.90",
            labels: [],
            category: "Loisirs",
            id: "f728c71f-bf61-44aa-997e-fb38587c6c5e"
          },
          {
            type: "expanse",
            amount: "20.00",
            labels: [],
            date: 1614729600000,
            category: "Vie quotidienne",
            id: "7fde992e-5299-4624-a879-5443c66094e3"
          },
          {
            date: 1614729600000,
            category: "Impôts & Taxes",
            type: "income",
            labels: [],
            amount: "190.00",
            id: "59c20dc8-e17c-434f-98e2-c1b9fef63168"
          },
          {
            labels: [],
            category: "Auto & Moto",
            date: 1614729600000,
            amount: "35.00",
            type: "expanse",
            id: "1970c346-c9ba-4b40-ae9d-b3f1221e231d"
          },
          {
            labels: [],
            type: "expanse",
            amount: "14.99",
            date: 1614729600000,
            category: "Vie quotidienne",
            id: "101d2450-ee56-4b89-9ef5-95b9ac66319d"
          },
          {
            labels: [],
            date: 1614556800000,
            amount: "46.00",
            category: "Loisirs",
            type: "expanse",
            id: "b78cbef2-de68-4c56-8edd-dca0ca2f97ad"
          },
          {
            amount: "980.00",
            date: 1614556800000,
            category: "Virements émis",
            type: "expanse",
            labels: [],
            id: "9597b9f8-15fa-4d04-b489-54a90f78b061"
          },
          {
            category: "Virements émis",
            date: 1614556800000,
            type: "expanse",
            labels: [],
            amount: "2.50",
            id: "5c97cdd2-e1ae-4eff-bd89-3a272e719b4c"
          },
          {
            date: 1614556800000,
            labels: [],
            type: "expanse",
            category: "Auto & Moto",
            amount: "31.76",
            id: "25f1858f-58cd-4bff-982d-86e89e8fcc0d"
          },
          {
            date: 1614297600000,
            category: "Dépots (cartes/chèques/espèces)",
            amount: "500.00",
            type: "income",
            labels: [],
            id: "73bcd2de-fff8-4bc8-b7ed-c219c65381c3"
          },
          {
            date: 1614297600000,
            labels: [],
            category: "Vie quotidienne",
            amount: "16.99",
            type: "expanse",
            id: "53b115bd-810e-4a46-85f7-cdfd98c7c2e2"
          },
          {
            category: "Revenus du travail",
            date: 1614211200000,
            type: "income",
            amount: "945.42",
            labels: [],
            id: "f82ae607-8ee2-44a9-bdd0-a3e5b2c1d00b"
          },
          {
            date: 1614211200000,
            type: "expanse",
            amount: "190.00",
            category: "Impôts & Taxes",
            labels: [],
            id: "93e5280f-23c4-418b-a021-957b3fb2d043"
          },
          {
            date: 1614211200000,
            category: "Vie quotidienne",
            amount: "25.25",
            type: "expanse",
            labels: [],
            id: "769b257c-7954-4a63-ad1f-a5af6188f76c"
          },
          {
            labels: [],
            amount: "29.99",
            date: 1614038400000,
            type: "expanse",
            category: "Vie quotidienne",
            id: "e103115a-86fb-489a-bc3c-d1ea3d0d339d"
          },
          {
            date: 1614038400000,
            category: "Vie quotidienne",
            amount: "34.30",
            type: "expanse",
            labels: [],
            id: "ab4391f3-4cd0-4757-9c24-694c9f1ac057"
          },
          {
            type: "expanse",
            labels: [],
            amount: "176.44",
            category: "Vie quotidienne",
            date: 1613952000000,
            id: "caba627a-04e0-41e6-8e22-6bc9d319946c"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            amount: "39.90",
            labels: [],
            date: 1613952000000,
            id: "a95a2813-9377-45fc-94d2-1466a1be1c66"
          },
          {
            amount: "20.00",
            labels: [],
            date: 1613952000000,
            type: "expanse",
            category: "Loisirs",
            id: "a50a85ba-7713-4300-bce3-83cc089eea21"
          },
          {
            type: "expanse",
            amount: "22.89",
            date: 1613952000000,
            category: "Vie quotidienne",
            labels: [],
            id: "6a451086-c026-4ad7-b226-0fb7636afe58"
          },
          {
            date: 1613952000000,
            category: "Loisirs",
            amount: "38.99",
            labels: [],
            type: "expanse",
            id: "5cc601e9-362a-4513-8247-b56f7b2f30d4"
          },
          {
            amount: "483.83",
            date: 1613692800000,
            labels: [],
            type: "income",
            category: "Santé",
            id: "a50bd838-d951-4791-bb15-c9bfa6da6455"
          },
          {
            category: "Santé",
            labels: [],
            type: "income",
            amount: "7.50",
            date: 1613692800000,
            id: "98d7c00c-4def-47d7-87cb-af80a91ab808"
          },
          {
            category: "Loisirs",
            labels: [],
            amount: "39.29",
            date: 1613606400000,
            type: "expanse",
            id: "4769e95d-5f69-453d-8e24-486f3371eccf"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            amount: "1.70",
            labels: [],
            date: 1613520000000,
            id: "d14cf5bf-06c0-45cb-9361-e09bcd968c2e"
          },
          {
            amount: "35.00",
            type: "expanse",
            category: "Vie quotidienne",
            date: 1613520000000,
            labels: [],
            id: "bc5f83ba-3119-463f-b8c2-9f5a8ac41e4f"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            date: 1613520000000,
            labels: [],
            amount: "20.00",
            id: "1702ff44-1fe7-41e3-a8d4-8651fbcb1fa0"
          },
          {
            type: "expanse",
            amount: "0.79",
            labels: [],
            date: 1613433600000,
            category: "Vie quotidienne",
            id: "74c31e23-a196-4ff5-98e3-8023e5bc9887"
          },
          {
            amount: "13.00",
            category: "Impôts & Taxes",
            labels: [],
            type: "expanse",
            date: 1613433600000,
            id: "3121d68a-54a7-4d1e-bf61-9c972c7ac0f9"
          },
          {
            amount: "7.50",
            type: "expanse",
            category: "Santé",
            labels: [],
            date: 1613347200000,
            id: "fdbf36c1-517b-42a3-a6af-28fdad785a04"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            date: 1613347200000,
            type: "expanse",
            amount: "34.80",
            id: "f2e7f88b-e734-44e8-bda6-160693a04a2c"
          },
          {
            category: "Santé",
            type: "expanse",
            amount: "14.10",
            labels: [],
            date: 1613347200000,
            id: "e5e4c805-8ae9-475e-96c9-c555174d08ed"
          },
          {
            amount: "20.00",
            labels: [],
            type: "expanse",
            category: "Dépenses d'épargne",
            date: 1613347200000,
            id: "dd68dd09-11ce-4c51-a0d3-2df87f949e99"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            date: 1613347200000,
            labels: [],
            amount: "175.37",
            id: "ca77b1ed-8a20-40b4-bcf1-3ab316897252"
          },
          {
            type: "expanse",
            date: 1613347200000,
            amount: "156.49",
            labels: [],
            category: "Vie quotidienne",
            id: "c01c55d6-de20-4d12-92e6-891c52eff0c8"
          },
          {
            labels: [],
            date: 1613347200000,
            amount: "44.30",
            category: "Santé",
            type: "expanse",
            id: "87c4bd7a-67f7-4bae-93c9-7cdd9f78c2b3"
          },
          {
            type: "expanse",
            date: 1613347200000,
            labels: [],
            category: "Auto & Moto",
            amount: "1.15",
            id: "86da46c4-a5f5-48c5-99e1-788b6feaacf9"
          },
          {
            type: "expanse",
            labels: [],
            amount: "40.95",
            date: 1613347200000,
            category: "Loisirs",
            id: "838dbc27-06ce-4c69-b264-bfdd38764a05"
          },
          {
            type: "expanse",
            category: "Non catégorisé",
            amount: "16.20",
            labels: [],
            date: 1613347200000,
            id: "774681cc-4341-4ceb-ac38-3c3668aef0d3"
          },
          {
            date: 1613347200000,
            category: "Loisirs",
            amount: "4.05",
            type: "expanse",
            labels: [],
            id: "66222b86-4b7a-4d52-8822-bb94f1f2a245"
          },
          {
            labels: [],
            amount: "7.50",
            date: 1613347200000,
            type: "income",
            category: "Santé",
            id: "1f03e479-f2b5-45e6-896a-3f99c71c9a9a"
          },
          {
            category: "Vie quotidienne",
            amount: "9.70",
            date: 1613347200000,
            labels: [],
            type: "expanse",
            id: "1a9ec323-6440-4d6a-a616-3be9897faa2e"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            amount: "10.00",
            date: 1613347200000,
            id: "17d2c696-9ba6-4b36-917a-643d1262aea9"
          },
          {
            amount: "1.30",
            date: 1613088000000,
            type: "expanse",
            labels: [],
            category: "Loisirs",
            id: "ce1c7b88-de4a-47cd-aed0-76fa54489c2d"
          },
          {
            type: "expanse",
            date: 1613001600000,
            labels: [],
            amount: "9.95",
            category: "Vie quotidienne",
            id: "fd56e162-fdd5-4205-9f13-5f35bff61eec"
          },
          {
            category: "Vie quotidienne",
            date: 1613001600000,
            amount: "41.88",
            labels: [],
            type: "expanse",
            id: "a3fd3316-8afa-45b5-895c-e35921cb0083"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            amount: "25.00",
            date: 1613001600000,
            type: "expanse",
            id: "81b9e8aa-0d09-4cc2-9a08-9a3cd475b19f"
          },
          {
            category: "Dépots (cartes/chèques/espèces)",
            amount: "100.00",
            type: "income",
            date: 1613001600000,
            labels: [],
            id: "5f216dc0-3b19-48cf-86e7-f595a5ccf8ce"
          },
          {
            labels: [],
            category: "Cadeaux et solidarité",
            date: 1612915200000,
            amount: "10.00",
            type: "expanse",
            id: "fb63eb00-4776-4f2e-a821-c7fb109c3ac5"
          },
          {
            amount: "30.00",
            category: "Cadeaux et solidarité",
            type: "expanse",
            date: 1612915200000,
            labels: [],
            id: "dc331b4f-00d1-4de3-87fa-d07857b61de3"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            date: 1612915200000,
            amount: "15.41",
            labels: [],
            id: "2d97e166-0f56-470b-bc45-82875b4cdef7"
          },
          {
            type: "expanse",
            category: "Logement",
            date: 1612915200000,
            amount: "130.00",
            labels: [],
            id: "25c6a97a-fa9d-445d-8c42-9ce702627844"
          },
          {
            amount: "7.50",
            category: "Santé",
            type: "expanse",
            date: 1612828800000,
            labels: [],
            id: "df6316e0-4c66-45a4-8ec3-ec6970803bcd"
          },
          {
            date: 1612828800000,
            category: "Vie quotidienne",
            amount: "30.20",
            labels: [],
            type: "expanse",
            id: "dc2ed560-763a-414e-b891-2bc310e2a0ed"
          },
          {
            labels: [],
            category: "Logement",
            amount: "300.95",
            type: "expanse",
            date: 1612828800000,
            id: "af55c50f-6ff7-4666-b2d9-ddb56e11ca62"
          },
          {
            date: 1612828800000,
            type: "expanse",
            category: "Loisirs",
            labels: [],
            amount: "23.17",
            id: "a96267a9-3e6c-412e-aa44-444df082718f"
          },
          {
            amount: "34.30",
            labels: [],
            type: "expanse",
            date: 1612828800000,
            category: "Non catégorisé",
            id: "a667fbd5-9964-40fa-9e99-4c9b12afa945"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            amount: "10.51",
            type: "expanse",
            date: 1612742400000,
            id: "dc6b4df2-c58d-428b-b86d-80966e42c2cf"
          },
          {
            date: 1612742400000,
            labels: [],
            category: "Vie quotidienne",
            amount: "10.51",
            type: "expanse",
            id: "d37f8426-5871-46c2-90d3-4883e4258f81"
          },
          {
            type: "expanse",
            amount: "7.94",
            date: 1612742400000,
            labels: [],
            category: "Santé",
            id: "c2f81c45-47d2-4a2f-9b47-474f1aa3ee9f"
          },
          {
            amount: "14.99",
            type: "expanse",
            date: 1612742400000,
            category: "Abonnements & téléphonie",
            labels: [],
            id: "9a00b047-e19e-4c35-a18c-4208d21eef8d"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            amount: "37.49",
            date: 1612742400000,
            labels: [],
            id: "7c376380-820d-461b-b759-f2733c085029"
          },
          {
            type: "income",
            category: "Virements reçus",
            labels: [],
            date: 1612742400000,
            amount: "400.00",
            id: "3fb14cd5-db6b-4ccd-988b-6804575c64c2"
          },
          {
            type: "expanse",
            amount: "378.72",
            labels: [],
            category: "Loisirs",
            date: 1612742400000,
            id: "23f39972-b8e5-4373-a69a-6602f4b3560f"
          },
          {
            labels: [],
            amount: "34.17",
            type: "expanse",
            category: "Vie quotidienne",
            date: 1612483200000,
            id: "d0923bab-76b8-4546-9c80-3901d824d230"
          },
          {
            date: 1612483200000,
            amount: "15.99",
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            id: "37dfcf9d-3d18-49ce-a593-59f8dba8a502"
          },
          {
            date: 1612396800000,
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            amount: "36.00",
            id: "f4faf8bb-09cd-4303-b13b-bb02a41d522a"
          },
          {
            labels: [],
            date: 1612396800000,
            type: "expanse",
            category: "Loisirs",
            amount: "2.40",
            id: "c215a358-8c04-48ef-9c63-c998d87e2e1d"
          },
          {
            type: "expanse",
            date: 1612396800000,
            labels: [],
            category: "Cadeaux et solidarité",
            amount: "43.60",
            id: "6502fb7b-0012-44af-ba26-517ec95ec1f2"
          },
          {
            amount: "37.94",
            category: "Santé",
            type: "expanse",
            labels: [],
            date: 1612310400000,
            id: "a84dc216-e4c9-4c73-9107-d06b322c2e28"
          },
          {
            category: "Vie quotidienne",
            date: 1612310400000,
            labels: [],
            amount: "69.80",
            type: "expanse",
            id: "41c6d6e2-52f6-414e-8ef6-39ec174c5434"
          },
          {
            type: "expanse",
            category: "Santé",
            date: 1612310400000,
            labels: [],
            amount: "38.70",
            id: "316d54f8-f1ec-4a41-a4e6-49db37aaa0e5"
          },
          {
            category: "Chèques",
            type: "expanse",
            date: 1612224000000,
            labels: [],
            amount: "54.58",
            id: "c2243b47-ccf6-4755-b736-f66fc3ff031f"
          },
          {
            category: "Vie quotidienne",
            amount: "3.72",
            date: 1612224000000,
            labels: [],
            type: "expanse",
            id: "82deba50-b9e7-41bf-9ba5-f1a8eb93ce55"
          },
          {
            category: "Logement",
            labels: [],
            amount: "31.76",
            type: "expanse",
            date: 1612137600000,
            id: "c432c439-784b-4064-a8d8-a1f2967e9aef"
          },
          {
            category: "Abonnements & téléphonie",
            type: "expanse",
            date: 1612137600000,
            labels: [],
            amount: "13.00",
            id: "c17828c9-8df4-4046-a62f-55f39e8f959b"
          },
          {
            category: "Virements émis",
            labels: [],
            type: "expanse",
            date: 1612137600000,
            amount: "2.50",
            id: "be008f61-c678-4537-847a-f456dee020b6"
          },
          {
            type: "expanse",
            category: "Loisirs",
            labels: [],
            date: 1612137600000,
            amount: "29.31",
            id: "92953d14-7e50-499c-902d-e4fb1db6e538"
          },
          {
            labels: [],
            date: 1612137600000,
            amount: "980.00",
            type: "expanse",
            category: "Virements émis",
            id: "8b911ce4-4eb7-4c0e-b98a-f2557213fd18"
          },
          {
            date: 1612137600000,
            amount: "49.60",
            labels: [],
            type: "expanse",
            category: "Santé",
            id: "630bbf32-e55f-4a70-a4f4-24563c957a33"
          },
          {
            labels: [],
            date: 1611878400000,
            type: "expanse",
            category: "Cadeaux et solidarité",
            amount: "10.00",
            id: "e737d6a2-3222-450a-b136-df040a115c9b"
          },
          {
            type: "income",
            amount: "95.00",
            category: "Virements reçus",
            labels: [],
            date: 1611878400000,
            id: "e54108fb-3949-4634-a565-ccb2da7d87d3"
          },
          {
            date: 1611878400000,
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            amount: "54.47",
            id: "a557cb12-52fa-4660-ba91-e1d10bc979c3"
          },
          {
            labels: [],
            date: 1611878400000,
            type: "income",
            category: "Vie quotidienne",
            amount: "26.95",
            id: "2aae6e9b-889b-40d4-95fb-e0c0a04e74b4"
          },
          {
            date: 1611878400000,
            amount: "22.79",
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            id: "250aec6e-4dd0-48c4-9ab7-42068b255c40"
          },
          {
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            amount: "2.22",
            date: 1611878400000,
            id: "1360d5f1-88af-4752-b591-cb16db448886"
          },
          {
            category: "Virements reçus",
            amount: "2321.75",
            labels: [],
            type: "income",
            date: 1611705600000,
            id: "a8ce7ab8-5bbc-476f-956d-7784c025f113"
          },
          {
            amount: "34.30",
            labels: [],
            category: "Non catégorisé",
            date: 1611619200000,
            type: "expanse",
            id: "c525c9fc-e988-4d69-8a85-ee9e3651eb1e"
          },
          {
            labels: [],
            type: "expanse",
            date: 1611619200000,
            amount: "242.98",
            category: "Vie quotidienne",
            id: "6798906b-9c8f-4869-90d2-ea82cd333552"
          },
          {
            date: 1611532800000,
            labels: [],
            category: "Santé",
            amount: "147.15",
            type: "expanse",
            id: "e5da7442-380e-4aea-a9a9-78d37e1b4f45"
          },
          {
            labels: [],
            date: 1611532800000,
            type: "expanse",
            category: "Loisirs",
            amount: "2.80",
            id: "ded25e0c-2250-48fa-99fd-7ea212927797"
          },
          {
            amount: "215.46",
            category: "Vie quotidienne",
            date: 1611532800000,
            type: "expanse",
            labels: [],
            id: "d2560efa-3f9e-4ccb-b830-2d6a17ae9142"
          },
          {
            date: 1611532800000,
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            amount: "2.58",
            id: "8cdcf651-7ba4-4fd1-90a8-4cba17c4a0ea"
          },
          {
            type: "expanse",
            amount: "190.00",
            category: "Impôts & Taxes",
            labels: [],
            date: 1611532800000,
            id: "7fac8a44-b737-4d9f-9868-937a9cc0d483"
          },
          {
            labels: [],
            date: 1611532800000,
            amount: "58.00",
            type: "expanse",
            category: "Santé",
            id: "35d27c71-2590-46c1-83a3-5a6388d17a89"
          },
          {
            date: 1611532800000,
            type: "expanse",
            labels: [],
            category: "Loisirs",
            amount: "5.50",
            id: "256ee9b2-942c-47c8-87d9-6f5e04b35904"
          },
          {
            category: "Vie quotidienne",
            date: 1611273600000,
            labels: [],
            type: "expanse",
            amount: "50.98",
            id: "4ec8590c-8511-4e26-bc67-2c951a2d46f4"
          },
          {
            category: "Loisirs",
            amount: "43.99",
            labels: [],
            date: 1611187200000,
            type: "expanse",
            id: "4fed7a22-31b6-4936-b3f5-cd16c77be16e"
          },
          {
            labels: [],
            date: 1611100800000,
            amount: "752.04",
            type: "income",
            category: "Santé",
            id: "e73f7d69-5344-4408-9946-1cf7158a694b"
          },
          {
            type: "expanse",
            amount: "52.25",
            category: "Loisirs",
            labels: [],
            date: 1611100800000,
            id: "a57ce800-78d8-4a03-a7f8-e77ec6a1f334"
          },
          {
            date: 1611100800000,
            category: "Loisirs",
            labels: [],
            amount: "52.25",
            type: "expanse",
            id: "7ac5267e-32c3-4b62-baaa-51ba4efcfa63"
          },
          {
            amount: "180.24",
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            date: 1610928000000,
            id: "efe3e593-2ce2-46c4-8373-0b20e9b4a8e3"
          },
          {
            type: "expanse",
            labels: [],
            date: 1610928000000,
            amount: "52.00",
            category: "Santé",
            id: "89063a8d-019b-4edc-8f74-238fa4fc536b"
          },
          {
            amount: "13.00",
            date: 1610928000000,
            labels: [],
            category: "Impôts & Taxes",
            type: "expanse",
            id: "6e251b97-0f0c-4a84-a7f0-c4f0004b6000"
          },
          {
            type: "income",
            date: 1610928000000,
            amount: "0.75",
            labels: [],
            category: "Vie quotidienne",
            id: "0329fbe8-929d-47c5-91ce-6ab427b50c04"
          },
          {
            labels: [],
            type: "expanse",
            date: 1610668800000,
            amount: "20.00",
            category: "Mouvements internes débiteurs",
            id: "c2bb06c8-9c43-40e4-a46c-48825c549d03"
          },
          {
            type: "income",
            date: 1610668800000,
            amount: "47.00",
            category: "Virements reçus",
            labels: [],
            id: "716f5e16-3634-4fe3-9fc4-0b89e6d73571"
          },
          {
            labels: [],
            category: "Virements reçus",
            date: 1610582400000,
            amount: "200.00",
            type: "income",
            id: "ab1b8c68-4ccc-44e6-a674-16607a552ea4"
          },
          {
            date: 1610496000000,
            amount: "48.70",
            category: "Santé",
            labels: [],
            type: "expanse",
            id: "fdf62d99-adef-471c-a90f-35d75a73b0dc"
          },
          {
            amount: "36.15",
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            date: 1610496000000,
            id: "d6412cb5-f1be-433b-b6b1-77fff3a91c0f"
          },
          {
            amount: "26.79",
            category: "Chèques",
            date: 1610496000000,
            type: "expanse",
            labels: [],
            id: "469ed73c-4f94-45dc-b709-0c5ec6f03b90"
          },
          {
            amount: "15.50",
            date: 1610496000000,
            labels: [],
            category: "Chèques",
            type: "expanse",
            id: "23d17d8b-1fa6-4a2e-8f55-44267bee80e3"
          },
          {
            category: "Cadeaux et solidarité",
            amount: "10.00",
            labels: [],
            date: 1610323200000,
            type: "expanse",
            id: "708d7af1-5ac9-4fa0-923e-4de2fd48165d"
          },
          {
            type: "expanse",
            labels: [],
            date: 1610323200000,
            amount: "130.00",
            category: "Logement",
            id: "5b67e022-80a7-4d35-bdf4-89a07fe77284"
          },
          {
            category: "Virements émis",
            labels: [],
            type: "expanse",
            amount: "26.00",
            date: 1610323200000,
            id: "452e3189-ace6-404c-8bce-47f53ae07cd3"
          },
          {
            date: 1610323200000,
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            amount: "3.00",
            id: "3af2bc3b-2568-42d8-b5d6-8d228f8014f8"
          },
          {
            amount: "300.95",
            category: "Logement",
            labels: [],
            type: "expanse",
            date: 1610323200000,
            id: "33aca3c0-0b03-43de-a2fb-84b379f7be40"
          },
          {
            date: 1610323200000,
            type: "expanse",
            labels: [],
            amount: "13.46",
            category: "Vie quotidienne",
            id: "10ba180c-31b1-45ef-a598-c651091ae359"
          },
          {
            amount: "36.99",
            category: "Loisirs",
            labels: [],
            type: "expanse",
            date: 1610323200000,
            id: "07117369-075f-4eb1-998d-744215b2a808"
          },
          {
            amount: "650.00",
            category: "Dépots (cartes/chèques/espèces)",
            type: "income",
            date: 1610064000000,
            labels: [],
            id: "edfe042d-9e64-4fb6-b1ca-5da9e8cce4cf"
          },
          {
            category: "Services financiers & professionnels",
            date: 1610064000000,
            labels: [],
            type: "expanse",
            amount: "0.39",
            id: "da39d3fe-be75-4245-ac95-435fae60ac5a"
          },
          {
            type: "expanse",
            category: "Abonnements & téléphonie",
            amount: "14.99",
            date: 1610064000000,
            labels: [],
            id: "b0481e21-afef-43fb-bc3b-6029e14b27c8"
          },
          {
            amount: "12.25",
            category: "Auto & Moto",
            type: "expanse",
            date: 1609977600000,
            labels: [],
            id: "ab93282a-8cf4-47db-bfe4-1b0c32c8615c"
          },
          {
            date: 1609977600000,
            type: "expanse",
            amount: "92.16",
            labels: [],
            category: "Vie quotidienne",
            id: "683f1fc1-7902-47c6-b586-2f89bb30cf14"
          },
          {
            date: 1609977600000,
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            amount: "34.30",
            id: "5e4242e5-1436-48ea-96c9-8dc933ef9002"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            amount: "196.23",
            labels: [],
            date: 1609977600000,
            id: "487ce933-1f6e-4e4d-8d22-9e61f517d3ce"
          },
          {
            amount: "25.19",
            category: "Loisirs",
            labels: [],
            date: 1609891200000,
            type: "expanse",
            id: "a1928460-e8a3-4aba-aa9f-81624de50eca"
          },
          {
            amount: "50.83",
            type: "expanse",
            labels: [],
            category: "Auto & Moto",
            date: 1609804800000,
            id: "b5bd655f-7abf-4ae4-b889-2546e50dfcda"
          },
          {
            date: 1609804800000,
            category: "Vie quotidienne",
            type: "expanse",
            labels: [],
            amount: "2.04",
            id: "9f62e819-063c-40bd-b1d1-0e15cb3e92ec"
          },
          {
            type: "expanse",
            date: 1609804800000,
            amount: "35.79",
            labels: [],
            category: "Loisirs",
            id: "946a1642-4293-4c9a-a797-810d9bbf38f9"
          },
          {
            type: "expanse",
            date: 1609804800000,
            category: "Santé",
            labels: [],
            amount: "57.58",
            id: "608baac8-8530-4827-a69d-9101a0af3cf8"
          },
          {
            amount: "7.50",
            labels: [],
            category: "Santé",
            date: 1609804800000,
            type: "income",
            id: "05d0761f-5a38-40c6-8ce3-6f4ba24a1ea6"
          },
          {
            category: "Virements reçus",
            date: 1609718400000,
            type: "income",
            labels: [],
            amount: "100.00",
            id: "cf852edb-b90b-4dfe-9ecd-6a58e2c2eba2"
          },
          {
            labels: [],
            category: "Abonnements & téléphonie",
            amount: "10.00",
            type: "expanse",
            date: 1609718400000,
            id: "b9a246c8-ff4d-41aa-8640-b26fa912756b"
          },
          {
            labels: [],
            type: "expanse",
            category: "Logement",
            date: 1609718400000,
            amount: "31.76",
            id: "92521e54-dac6-4893-bfca-56969966479b"
          },
          {
            date: 1609718400000,
            category: "Virements émis",
            type: "expanse",
            labels: [],
            amount: "980.00",
            id: "3563b2fb-e3ba-43fa-9bf0-4cd0818f499e"
          },
          {
            date: 1609718400000,
            type: "expanse",
            labels: [],
            category: "Virements émis",
            amount: "2.50",
            id: "0fac282f-7287-4b1f-97f3-0e2950d1a05d"
          },
          {
            amount: "50.90",
            date: 1609372800000,
            category: "Auto & Moto",
            type: "expanse",
            labels: [],
            id: "a7c7c5ca-5bcb-4eea-a42f-e6dfc1a73021"
          },
          {
            amount: "43.34",
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            date: 1609286400000,
            id: "4cf84cf9-37f1-4785-8e55-bf0fd227a142"
          },
          {
            category: "Virements reçus",
            type: "income",
            labels: [],
            date: 1609200000000,
            amount: "100.00",
            id: "8b3fe586-f642-4cb5-8991-1aa7ef6c8ac8"
          },
          {
            date: 1609200000000,
            labels: [],
            amount: "2128.41",
            category: "Virements reçus",
            type: "income",
            id: "8a77e51a-0480-4962-a9c0-0c31f346db6a"
          },
          {
            amount: "7.50",
            type: "expanse",
            labels: [],
            category: "Santé",
            date: 1609200000000,
            id: "789d3fc0-6096-4061-8841-51db154bed85"
          },
          {
            type: "expanse",
            date: 1609200000000,
            amount: "5.40",
            category: "Santé",
            labels: [],
            id: "4b33d4b7-9821-4deb-9d40-880798317f7e"
          },
          {
            amount: "500.00",
            category: "Virements reçus",
            type: "income",
            labels: [],
            date: 1609200000000,
            id: "2bb915ad-ee02-4b16-a720-e8db5dba8bda"
          },
          {
            amount: "27.89",
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            date: 1609113600000,
            id: "e882d096-5b3d-4f75-963b-554e20504d1a"
          },
          {
            category: "Impôts & Taxes",
            labels: [],
            type: "expanse",
            amount: "190.00",
            date: 1609113600000,
            id: "db3cb9aa-0f53-4439-8b67-fed463eb5f4d"
          },
          {
            date: 1609113600000,
            type: "expanse",
            category: "Loisirs",
            amount: "42.30",
            labels: [],
            id: "dad8b34d-4e0b-4ba7-81a4-ceca43318962"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            labels: [],
            date: 1609113600000,
            amount: "9.51",
            id: "b4fe62ed-64be-45f7-a142-ddfb714ba3c2"
          },
          {
            amount: "23.20",
            date: 1609113600000,
            category: "Santé",
            labels: [],
            type: "expanse",
            id: "80bdc581-e5ce-4d78-8cc3-7caf08171fab"
          },
          {
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            date: 1609113600000,
            amount: "21.26",
            id: "10bd3c4e-7549-4ae1-ab89-4ee3dc7b0b80"
          },
          {
            labels: [],
            category: "Santé",
            date: 1609113600000,
            amount: "4.39",
            type: "expanse",
            id: "0cd5f26b-20f9-42fd-9847-c53760f1d588"
          },
          {
            date: 1608681600000,
            labels: [],
            amount: "23.90",
            category: "Loisirs",
            type: "expanse",
            id: "dd08cfa9-a22c-4f7e-89e0-146e0fbda74e"
          },
          {
            category: "Santé",
            date: 1608681600000,
            type: "expanse",
            amount: "2.50",
            labels: [],
            id: "bfa9e912-2d62-4512-992d-8968518071e5"
          },
          {
            date: 1608681600000,
            labels: [],
            category: "Santé",
            type: "expanse",
            amount: "89.06",
            id: "4ad38120-7c63-417c-a260-5080aab49324"
          },
          {
            type: "expanse",
            date: 1608595200000,
            amount: "39.80",
            category: "Non catégorisé",
            labels: [],
            id: "cf750746-651c-490d-aadc-1b3185113dd8"
          },
          {
            labels: [],
            date: 1608595200000,
            amount: "185.35",
            type: "expanse",
            category: "Vie quotidienne",
            id: "3b09e42f-61b9-44f9-945d-2f211c2754f9"
          },
          {
            category: "Loisirs",
            date: 1608508800000,
            labels: [],
            amount: "1.60",
            type: "expanse",
            id: "fb068e58-b5ca-4415-9e10-60e075ff204d"
          },
          {
            labels: [],
            date: 1608508800000,
            amount: "23.70",
            type: "expanse",
            category: "Loisirs",
            id: "f63e1c2d-b898-4873-828f-8ceffb3e7816"
          },
          {
            labels: [],
            amount: "12.15",
            date: 1608508800000,
            category: "Loisirs",
            type: "expanse",
            id: "e058b797-8bf0-471d-9fbb-6f13d92e58fc"
          },
          {
            labels: [],
            type: "expanse",
            amount: "1.60",
            category: "Loisirs",
            date: 1608508800000,
            id: "da742513-47ef-4f84-9c23-f392ff31c04a"
          },
          {
            type: "expanse",
            category: "Non catégorisé",
            date: 1608508800000,
            amount: "15.23",
            labels: [],
            id: "d3942970-daff-4139-b877-9842677b0f62"
          },
          {
            date: 1608508800000,
            type: "expanse",
            labels: [],
            category: "Loisirs",
            amount: "1.10",
            id: "583fd88d-bdd9-4739-9e9a-c57dbf160b21"
          },
          {
            labels: [],
            amount: "18.90",
            type: "expanse",
            category: "Vie quotidienne",
            date: 1608508800000,
            id: "3909954c-618f-4473-b865-79ba356f2cd4"
          },
          {
            amount: "33.30",
            type: "expanse",
            category: "Loisirs",
            date: 1608508800000,
            labels: [],
            id: "1ff06f06-1420-4a1e-9640-e4b4d46c3dc8"
          },
          {
            date: 1608508800000,
            type: "expanse",
            category: "Loisirs",
            amount: "1.60",
            labels: [],
            id: "13788e5a-cfa9-4dc7-9a4c-e7d325ba0147"
          },
          {
            amount: "1.60",
            category: "Loisirs",
            labels: [],
            date: 1608249600000,
            type: "expanse",
            id: "b33e1e05-82e6-4cf3-81cc-4512f6e322a8"
          },
          {
            type: "expanse",
            labels: [],
            category: "Loisirs",
            date: 1608249600000,
            amount: "47.85",
            id: "8e78c281-21b5-4097-b5ff-93a67802f0b8"
          },
          {
            amount: "2.00",
            labels: [],
            category: "Loisirs",
            date: 1608249600000,
            type: "expanse",
            id: "44b10a47-4b96-41ab-a43f-462b649d97fb"
          },
          {
            amount: "7.40",
            labels: [],
            type: "expanse",
            date: 1608249600000,
            category: "Loisirs",
            id: "3ec6d62b-2993-46f6-a4c5-efdc446c7156"
          },
          {
            category: "Loisirs",
            labels: [],
            amount: "47.85",
            date: 1608249600000,
            type: "expanse",
            id: "394d0c48-1742-4f37-91df-d21de1433f41"
          },
          {
            date: 1608249600000,
            type: "expanse",
            category: "Loisirs",
            amount: "1.10",
            labels: [],
            id: "3341ff05-f14f-4a32-8c63-445739ca39f0"
          },
          {
            amount: "1.60",
            labels: [],
            date: 1608249600000,
            type: "expanse",
            category: "Loisirs",
            id: "0a8dee37-d6c0-48e1-a74f-abb06a51ea83"
          },
          {
            category: "Loisirs",
            date: 1608163200000,
            labels: [],
            amount: "1.60",
            type: "expanse",
            id: "fa950ea3-9bd1-41d8-b9ef-10305c5a3d5e"
          },
          {
            amount: "7.10",
            category: "Loisirs",
            date: 1608163200000,
            type: "expanse",
            labels: [],
            id: "e41823c1-303f-484b-810c-312a28bd9f3c"
          },
          {
            date: 1608163200000,
            amount: "1.10",
            labels: [],
            type: "expanse",
            category: "Loisirs",
            id: "724676a4-8eae-4733-9375-45b38401790d"
          },
          {
            category: "Loisirs",
            type: "expanse",
            date: 1608163200000,
            labels: [],
            amount: "12.50",
            id: "65911bbb-ea0b-46b9-9a32-d7dcce18360d"
          },
          {
            type: "expanse",
            labels: [],
            amount: "2.00",
            date: 1608163200000,
            category: "Loisirs",
            id: "200ead1c-761f-4ee3-a0c2-f0fe05dacfd1"
          },
          {
            date: 1608076800000,
            category: "Vie quotidienne",
            type: "expanse",
            amount: "20.00",
            labels: [],
            id: "d288cb9d-58bc-4a69-b0ae-628ff8ade964"
          },
          {
            category: "Loisirs",
            amount: "46.55",
            date: 1608076800000,
            labels: [],
            type: "expanse",
            id: "b3594613-63eb-4233-8475-a119e0281825"
          },
          {
            amount: "1.10",
            labels: [],
            date: 1608076800000,
            type: "expanse",
            category: "Loisirs",
            id: "aa1460a2-f976-4a18-b0ad-10717c86632a"
          },
          {
            type: "expanse",
            amount: "21.40",
            date: 1608076800000,
            category: "Chèques",
            labels: [],
            id: "8ebbf5de-1108-4482-9ffa-3344a3286784"
          },
          {
            amount: "9.50",
            labels: [],
            category: "Loisirs",
            date: 1608076800000,
            type: "expanse",
            id: "4f6418b6-f768-4a22-b3c6-b4722e147f49"
          },
          {
            date: 1608076800000,
            amount: "1.90",
            category: "Loisirs",
            type: "expanse",
            labels: [],
            id: "3f9c83f7-2ff1-4ebd-a320-1fd78bfe7d8a"
          },
          {
            type: "expanse",
            date: 1608076800000,
            amount: "1.60",
            category: "Loisirs",
            labels: [],
            id: "03178451-f7d2-4e71-b3b6-586bc5269ceb"
          },
          {
            type: "expanse",
            labels: [],
            amount: "14.10",
            category: "Loisirs",
            date: 1607990400000,
            id: "b450c2ad-e8e8-46c1-8fe9-d04d19e2032b"
          },
          {
            date: 1607990400000,
            category: "Dépenses d'épargne",
            labels: [],
            type: "expanse",
            amount: "20.00",
            id: "749a5922-871d-4741-84d7-aee2be3bb6d1"
          },
          {
            labels: [],
            date: 1607990400000,
            type: "expanse",
            amount: "1.50",
            category: "Loisirs",
            id: "29ba253f-a432-4439-9bdd-e230d5586234"
          },
          {
            date: 1607904000000,
            amount: "19.50",
            labels: [],
            category: "Loisirs",
            type: "expanse",
            id: "d2eddc2c-2617-4f96-8078-d5a32045f6ef"
          },
          {
            category: "Virements émis",
            labels: [],
            amount: "100.00",
            type: "expanse",
            date: 1607904000000,
            id: "8636d7de-5335-4edf-bd41-95a7708968ff"
          },
          {
            date: 1607904000000,
            type: "expanse",
            category: "Vie quotidienne",
            amount: "28.30",
            labels: [],
            id: "7f310284-e482-41d7-bf1b-52f08bec950d"
          },
          {
            labels: [],
            amount: "23.90",
            type: "expanse",
            category: "Loisirs",
            date: 1607904000000,
            id: "50718f18-f0a9-4e43-b52a-7469413dbe91"
          },
          {
            labels: [],
            category: "Loisirs",
            type: "expanse",
            date: 1607904000000,
            amount: "23.80",
            id: "47af8761-dba7-4c0c-8e59-f6c110aca498"
          },
          {
            amount: "14.09",
            category: "Loisirs",
            labels: [],
            type: "expanse",
            date: 1607904000000,
            id: "40dadbd8-5465-47ff-9dfd-3e298ab40580"
          },
          {
            date: 1607558400000,
            type: "expanse",
            category: "Logement",
            labels: [],
            amount: "130.00",
            id: "d76e1e54-82bb-4408-baca-f99509f6d1bd"
          },
          {
            category: "Loisirs",
            type: "expanse",
            labels: [],
            amount: "10.20",
            date: 1607558400000,
            id: "c60ea841-da51-4660-8d82-064405701fb7"
          },
          {
            date: 1607558400000,
            type: "expanse",
            amount: "7.00",
            labels: [],
            category: "Virements émis",
            id: "9f492125-8d62-45c2-a71d-42a604114f36"
          },
          {
            amount: "10.00",
            type: "expanse",
            labels: [],
            date: 1607558400000,
            category: "Cadeaux et solidarité",
            id: "098b52e6-41b4-4a90-8f45-d79c0a84dcef"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            date: 1607472000000,
            amount: "45.90",
            labels: [],
            id: "c81b7749-241e-4e25-91bf-67dcbd033e5b"
          },
          {
            category: "Logement",
            date: 1607472000000,
            amount: "300.95",
            labels: [],
            type: "expanse",
            id: "59b99ebd-8783-48fa-82f0-8272368f8382"
          },
          {
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            date: 1607385600000,
            amount: "14.98",
            id: "ff755172-b764-4299-aa2f-310f6914153b"
          },
          {
            labels: [],
            category: "Santé",
            type: "expanse",
            date: 1607299200000,
            amount: "14.90",
            id: "f70b32a5-9179-4b6e-ada1-f206f6918b3a"
          },
          {
            date: 1607299200000,
            amount: "21.40",
            labels: [],
            category: "Chèques",
            type: "expanse",
            id: "ec4eadab-284b-4936-9845-f3ef2cd55f74"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            amount: "74.00",
            date: 1607299200000,
            labels: [],
            id: "c9fd9d75-5070-44b3-8ec8-3fcefbb314c5"
          },
          {
            date: 1607299200000,
            amount: "50.00",
            type: "income",
            labels: [],
            category: "Virements reçus",
            id: "c2b6120f-4438-4dd8-8afc-a358c0fc2541"
          },
          {
            type: "expanse",
            labels: [],
            amount: "38.86",
            date: 1607299200000,
            category: "Vie quotidienne",
            id: "bfc593d0-e1a4-480d-aa42-98f9198ddfe1"
          },
          {
            category: "Vie quotidienne",
            amount: "40.00",
            labels: [],
            type: "expanse",
            date: 1607299200000,
            id: "ac934cd3-58a6-4dfc-89cc-aca131f4f2a7"
          },
          {
            amount: "39.90",
            labels: [],
            date: 1607299200000,
            type: "expanse",
            category: "Vie quotidienne",
            id: "8d1f17fa-d960-4cb1-b1c5-af215b0ac750"
          },
          {
            category: "Abonnements & téléphonie",
            type: "expanse",
            amount: "14.99",
            date: 1607299200000,
            labels: [],
            id: "79a7a7c7-26b2-4a43-b74d-77702fbe7595"
          },
          {
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            date: 1607299200000,
            amount: "23.00",
            id: "6760a6d8-b767-4bd8-b370-76cb6c38ed8f"
          },
          {
            type: "expanse",
            date: 1607299200000,
            category: "Vie quotidienne",
            amount: "18.99",
            labels: [],
            id: "4b0852bc-cdab-49b3-9f49-a9c68bdc9098"
          },
          {
            amount: "19.31",
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            date: 1607299200000,
            id: "0b782194-7441-4f95-8936-d62041cb47d2"
          },
          {
            category: "Loisirs",
            date: 1607040000000,
            labels: [],
            type: "expanse",
            amount: "8.20",
            id: "d07880bf-9405-4f9e-9a0b-16155e4ecc44"
          },
          {
            type: "income",
            labels: [],
            category: "Virements reçus",
            amount: "25.00",
            date: 1607040000000,
            id: "b5da2f1f-bd98-4ec7-a6f6-81ca79cc031a"
          },
          {
            amount: "45.64",
            date: 1606867200000,
            category: "Virements reçus",
            labels: [],
            type: "income",
            id: "ce4c3075-a716-437f-bb3f-0be990efabbc"
          },
          {
            date: 1606867200000,
            type: "expanse",
            amount: "176.29",
            labels: [],
            category: "Vie quotidienne",
            id: "c1db1095-f2c5-4f3c-b854-88c02b48711d"
          },
          {
            category: "Abonnements & téléphonie",
            labels: [],
            date: 1606867200000,
            amount: "10.00",
            type: "expanse",
            id: "582ba25e-0dc4-4501-b87e-f364e381fb6a"
          },
          {
            date: 1606867200000,
            amount: "34.30",
            type: "expanse",
            labels: [],
            category: "Non catégorisé",
            id: "48805b5e-9f44-493d-ac36-bbe7db4d590a"
          },
          {
            type: "expanse",
            date: 1606780800000,
            category: "Virements émis",
            amount: "980.00",
            labels: [],
            id: "d8fcc27b-6469-47d9-b7a9-169939f6a71d"
          },
          {
            category: "Virements émis",
            amount: "2.50",
            type: "expanse",
            labels: [],
            date: 1606780800000,
            id: "c63ab713-82d6-4a33-959f-d48a98a9d999"
          },
          {
            amount: "31.76",
            category: "Logement",
            date: 1606780800000,
            type: "expanse",
            labels: [],
            id: "90798d7a-49dd-4aad-a407-d8c19277eb2b"
          },
          {
            labels: [],
            date: 1606694400000,
            amount: "45.00",
            type: "expanse",
            category: "Virements émis",
            id: "eee779ab-31a5-444a-9bc8-53dfaeb6e89e"
          },
          {
            category: "Vie quotidienne",
            date: 1606694400000,
            type: "expanse",
            amount: "4.40",
            labels: [],
            id: "93874d2f-23e8-4eb5-a7be-9828f21f917a"
          },
          {
            labels: [],
            category: "Loisirs",
            date: 1606694400000,
            amount: "1.40",
            type: "expanse",
            id: "55d7397d-8e7d-46d7-8a49-46af321e81dc"
          },
          {
            date: 1606694400000,
            amount: "14.70",
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            id: "15e3fbbc-a4ba-4968-89ca-0e902b6a983d"
          },
          {
            labels: [],
            amount: "34.12",
            date: 1606694400000,
            type: "expanse",
            category: "Loisirs",
            id: "0ab68661-90c2-42e6-a01d-963d7a234eb8"
          },
          {
            type: "expanse",
            labels: [],
            category: "Vie quotidienne",
            amount: "69.97",
            date: 1606435200000,
            id: "d13f0813-222f-427f-bcc1-65cc77d02ad7"
          },
          {
            type: "expanse",
            date: 1606435200000,
            labels: [],
            category: "Vie quotidienne",
            amount: "12.94",
            id: "6f693625-303f-4cfb-929d-96d8204e57ea"
          },
          {
            labels: [],
            category: "Virements reçus",
            date: 1606348800000,
            amount: "2132.09",
            type: "income",
            id: "3f923d16-bca9-4286-8655-29d87002e84c"
          },
          {
            amount: "190.00",
            date: 1606262400000,
            labels: [],
            category: "Impôts & Taxes",
            type: "expanse",
            id: "78e3d68a-97d4-4a02-91f6-355335defc0c"
          },
          {
            labels: [],
            type: "income",
            date: 1606262400000,
            amount: "1.75",
            category: "Vie quotidienne",
            id: "6bb5f8e5-e87e-47e4-9e24-21feab94b83a"
          },
          {
            category: "Services financiers & professionnels",
            amount: "45.00",
            labels: [],
            date: 1606262400000,
            type: "income",
            id: "4e6250fc-fc35-42a7-a426-12a74b14badb"
          },
          {
            labels: [],
            amount: "45.00",
            category: "Virements émis",
            type: "expanse",
            date: 1606262400000,
            id: "3ad04985-5cf9-4e41-b739-588cc90b65ae"
          },
          {
            amount: "10.00",
            labels: [],
            date: 1606176000000,
            type: "expanse",
            category: "Cadeaux et solidarité",
            id: "df48abed-e33d-4d50-a6d5-e343483ec07a"
          },
          {
            labels: [],
            type: "expanse",
            category: "Cadeaux et solidarité",
            date: 1606176000000,
            amount: "10.00",
            id: "59baeb1e-02cb-4050-862e-426d95bc585f"
          },
          {
            date: 1606176000000,
            labels: [],
            category: "Loisirs",
            amount: "95.70",
            type: "expanse",
            id: "2f6d0940-0dde-46db-9ee2-f98c26482c8c"
          },
          {
            type: "expanse",
            labels: [],
            date: 1606176000000,
            category: "Vie quotidienne",
            amount: "34.30",
            id: "23363109-c071-4401-9114-adefcf43aa62"
          },
          {
            amount: "21.40",
            date: 1606176000000,
            category: "Chèques",
            type: "expanse",
            labels: [],
            id: "22f40760-f6dd-4c49-8588-bc5f1a2c8f0c"
          },
          {
            amount: "122.54",
            type: "expanse",
            date: 1606176000000,
            labels: [],
            category: "Vie quotidienne",
            id: "10e66c5e-36d1-4392-bd7f-cf0405f8f330"
          },
          {
            category: "Cadeaux et solidarité",
            labels: [],
            type: "expanse",
            date: 1606176000000,
            amount: "20.00",
            id: "0e905e5a-559f-4950-9b5b-c8b3eb74cb6d"
          },
          {
            amount: "100.00",
            category: "Virements émis",
            type: "expanse",
            date: 1606089600000,
            labels: [],
            id: "50ca3f72-c982-4400-bfe1-dbad0d6b9c02"
          },
          {
            category: "Virements reçus",
            labels: [],
            amount: "3000.00",
            date: 1605744000000,
            type: "income",
            id: "e7b959fa-f686-4cd1-959b-ad8e7a92045a"
          },
          {
            labels: [],
            type: "expanse",
            category: "Loisirs",
            date: 1605744000000,
            amount: "1.00",
            id: "c42233b6-347b-4db4-9b2e-1471cbe47dca"
          },
          {
            category: "Auto & Moto",
            amount: "44.75",
            labels: [],
            date: 1605744000000,
            type: "expanse",
            id: "9cedb740-b95d-415e-b991-47be86d1e024"
          },
          {
            date: 1605657600000,
            amount: "6.00",
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            id: "e3ae5b85-637b-42b8-9c78-9dbd7ad738a5"
          },
          {
            amount: "7.71",
            type: "expanse",
            category: "Vie quotidienne",
            date: 1605657600000,
            labels: [],
            id: "b62a1676-e46d-4a9f-b72c-b3f038f2b1ea"
          },
          {
            category: "Vie quotidienne",
            amount: "5.18",
            type: "expanse",
            date: 1605657600000,
            labels: [],
            id: "af380d7d-72e7-4455-acdc-f5521768bf60"
          },
          {
            labels: [],
            date: 1605657600000,
            type: "expanse",
            amount: "34.30",
            category: "Non catégorisé",
            id: "4f0981a1-5668-4f51-bf51-0f83d41a8111"
          },
          {
            labels: [],
            date: 1605657600000,
            category: "Vie quotidienne",
            amount: "6.38",
            type: "expanse",
            id: "08ef34f5-11ba-4593-b6bd-5c8ed3a0f40d"
          },
          {
            date: 1605571200000,
            type: "income",
            amount: "500.00",
            category: "Virements reçus",
            labels: [],
            id: "babf438e-00cc-45d5-88d1-431c59b766b3"
          },
          {
            amount: "20.00",
            date: 1605484800000,
            category: "Dépenses d'épargne",
            labels: [],
            type: "expanse",
            id: "fefb53c6-903f-4b53-95f7-82d9b62645e7"
          },
          {
            type: "expanse",
            category: "Voyages & Transports",
            date: 1605484800000,
            amount: "42.99",
            labels: [],
            id: "c53605ad-0c34-409b-a615-4f404b617ff1"
          },
          {
            category: "Vie quotidienne",
            amount: "14.70",
            date: 1605484800000,
            type: "expanse",
            labels: [],
            id: "a86a251e-1381-4165-8841-294fdc7aec53"
          },
          {
            labels: [],
            type: "income",
            amount: "100.00",
            date: 1605484800000,
            category: "Virements reçus",
            id: "4b050c4f-5a48-4569-b193-180d622bf3c2"
          },
          {
            date: 1605484800000,
            labels: [],
            type: "expanse",
            category: "Santé",
            amount: "13.70",
            id: "4203c26e-79dc-4cb8-8302-65c51a812cb9"
          },
          {
            labels: [],
            category: "Mouvements internes créditeurs",
            type: "income",
            amount: "60.00",
            date: 1605484800000,
            id: "3b6249a2-44cc-4f20-b6b7-28fc61e27645"
          },
          {
            date: 1605139200000,
            category: "Vie quotidienne",
            amount: "140.19",
            type: "expanse",
            labels: [],
            id: "ae650cf9-c2c0-4feb-9c9e-08defe84e0d7"
          },
          {
            labels: [],
            date: 1605139200000,
            type: "expanse",
            amount: "38.70",
            category: "Vie quotidienne",
            id: "271451b2-5224-4851-835d-a96f306d68d1"
          },
          {
            date: 1605139200000,
            amount: "78.98",
            type: "expanse",
            category: "Vie quotidienne",
            labels: [],
            id: "0104e6a5-a84d-47bc-8293-379a18698477"
          },
          {
            category: "Cadeaux et solidarité",
            amount: "10.00",
            labels: [],
            date: 1604966400000,
            type: "expanse",
            id: "e9bf92fd-4e76-40d8-b05d-6282c90506e7"
          },
          {
            amount: "49.00",
            labels: [],
            type: "expanse",
            category: "Vie quotidienne",
            date: 1604966400000,
            id: "9d7c11d7-4d46-4a29-884e-20a0593b5144"
          },
          {
            amount: "45.17",
            type: "expanse",
            category: "Dépenses d'épargne",
            date: 1604966400000,
            labels: [],
            id: "5fa3a930-0579-4f6f-97af-0d4181134bf3"
          },
          {
            amount: "55.00",
            type: "expanse",
            date: 1604966400000,
            category: "Virements émis",
            labels: [],
            id: "4a4c4144-a38f-4516-903c-25d87b2b8ec0"
          },
          {
            category: "Logement",
            labels: [],
            date: 1604966400000,
            type: "expanse",
            amount: "130.00",
            id: "210361d8-3267-4a8a-8535-763331e040c0"
          },
          {
            date: 1604880000000,
            category: "Santé",
            labels: [],
            type: "expanse",
            amount: "4.36",
            id: "a092586a-8f85-4780-912f-638e78a9ad2f"
          },
          {
            category: "Logement",
            amount: "300.95",
            date: 1604880000000,
            type: "expanse",
            labels: [],
            id: "6812c77d-85f2-4898-84c0-542d4083a0f5"
          },
          {
            amount: "146.34",
            category: "Vie quotidienne",
            labels: [],
            date: 1604880000000,
            type: "expanse",
            id: "4def3d46-f562-4597-ae82-99742f6ce081"
          },
          {
            date: 1604620800000,
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            amount: "23.10",
            id: "afd312f9-0fb0-4948-89e1-a5ae3fd3ca91"
          },
          {
            category: "Loisirs",
            labels: [],
            type: "expanse",
            amount: "20.80",
            date: 1604534400000,
            id: "b46811a8-5c2f-404c-8022-f89648a38367"
          },
          {
            category: "Chèques",
            labels: [],
            date: 1604534400000,
            type: "expanse",
            amount: "21.40",
            id: "a3b0ca89-bb0d-4610-b301-5cd4b8277cef"
          },
          {
            amount: "14.99",
            date: 1604534400000,
            type: "expanse",
            labels: [],
            category: "Abonnements & téléphonie",
            id: "93439260-5a2c-4f9b-b98d-a04433701b1a"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            date: 1604448000000,
            amount: "34.30",
            labels: [],
            id: "81eceab6-854e-4f2c-ac15-b5b6760dfedc"
          },
          {
            date: 1604361600000,
            type: "expanse",
            category: "Vie quotidienne",
            amount: "109.65",
            labels: [],
            id: "1a579714-cab7-46e0-b598-212519a38d3f"
          },
          {
            amount: "980.00",
            date: 1604275200000,
            labels: [],
            category: "Virements émis",
            type: "expanse",
            id: "ebe1a730-e8b1-4a7a-a1f5-693dd1d890da"
          },
          {
            category: "Abonnements & téléphonie",
            labels: [],
            type: "expanse",
            date: 1604275200000,
            amount: "10.00",
            id: "ccf10739-0a08-4130-8907-174d54bafb5e"
          },
          {
            date: 1604275200000,
            type: "expanse",
            category: "Loisirs",
            labels: [],
            amount: "31.30",
            id: "8a54287e-b203-4f8e-bdc0-9f31679c6c9a"
          },
          {
            amount: "163.83",
            type: "expanse",
            labels: [],
            date: 1604275200000,
            category: "Vie quotidienne",
            id: "5ac7a110-5701-46bd-9b9f-c17c4c7ceacc"
          },
          {
            category: "Loisirs",
            labels: [],
            amount: "2.70",
            date: 1604275200000,
            type: "expanse",
            id: "3b9e523b-0b75-4e78-837e-45352b40e133"
          },
          {
            date: 1604275200000,
            category: "Virements émis",
            labels: [],
            type: "expanse",
            amount: "2.50",
            id: "31820aa2-fb21-4200-ae6a-4365b400b2f8"
          },
          {
            amount: "31.76",
            date: 1604275200000,
            type: "expanse",
            labels: [],
            category: "Auto & Moto",
            id: "0848d4dc-a091-4a99-a8d5-442627aed8e4"
          },
          {
            type: "expanse",
            category: "Vie quotidienne",
            date: 1603929600000,
            labels: [],
            amount: "36.40",
            id: "ca8ceb42-a2dc-486b-b600-372e1a9c7219"
          },
          {
            labels: [],
            category: "Virements reçus",
            amount: "2124.73",
            date: 1603843200000,
            type: "income",
            id: "7ebc049f-b33f-4b9b-a082-e174964381d9"
          },
          {
            amount: "1000.00",
            category: "Virements reçus",
            type: "income",
            labels: [],
            date: 1603756800000,
            id: "f02d24cc-125b-46c1-9db2-75f9db2ca55b"
          },
          {
            category: "Loisirs",
            date: 1603670400000,
            type: "expanse",
            labels: [],
            amount: "5.30",
            id: "e70f43c7-4e69-46ce-82a9-7498df8c9499"
          },
          {
            amount: "20.55",
            category: "Vie quotidienne",
            date: 1603670400000,
            labels: [],
            type: "expanse",
            id: "e1245482-d87d-4638-a778-288c26959cb2"
          },
          {
            amount: "10.62",
            labels: [],
            category: "Vie quotidienne",
            type: "expanse",
            date: 1603670400000,
            id: "c54cb15c-2299-41b9-946e-14760967a702"
          },
          {
            category: "Impôts & Taxes",
            type: "expanse",
            date: 1603670400000,
            amount: "570.00",
            labels: [],
            id: "baa477c8-d9b1-44ce-916f-68074b9e9599"
          },
          {
            category: "Vie quotidienne",
            labels: [],
            date: 1603670400000,
            amount: "13.70",
            type: "expanse",
            id: "4d5b4ccb-7338-4580-9abe-ae920fa2987e"
          },
          {
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            amount: "135.92",
            date: 1603411200000,
            id: "6d788abf-f21d-4551-af3f-101371f87107"
          },
          {
            category: "Vie quotidienne",
            type: "expanse",
            date: 1603238400000,
            amount: "13.06",
            labels: [],
            id: "dd0b976c-9ab8-4b31-bc33-5c965b14d122"
          },
          {
            category: "Vie quotidienne",
            date: 1603238400000,
            amount: "50.00",
            labels: [],
            type: "expanse",
            id: "cf7a1fc4-776d-457d-84c9-98de07974c17"
          },
          {
            category: "Non catégorisé",
            labels: [],
            date: 1603238400000,
            type: "expanse",
            amount: "1.70",
            id: "af4c033d-69ab-42c8-b313-d537e2a77095"
          },
          {
            category: "Chèques",
            amount: "21.40",
            labels: [],
            type: "expanse",
            date: 1603152000000,
            id: "4e1ad75c-39f6-4b25-b948-ce446c6682ed"
          },
          {
            type: "expanse",
            date: 1603152000000,
            amount: "32.00",
            category: "Vie quotidienne",
            labels: [],
            id: "2e1d57fc-1b7f-44fc-964e-3d662b5d3576"
          },
          {
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            amount: "12.90",
            date: 1603065600000,
            id: "fb3b8152-2b8d-4088-a51e-14ffe5d03632"
          },
          {
            date: 1603065600000,
            type: "expanse",
            amount: "4.30",
            category: "Auto & Moto",
            labels: [],
            id: "38ad15ae-1e88-49f5-abc9-f2fa2c45fd9c"
          },
          {
            labels: [],
            type: "expanse",
            category: "Virements émis",
            amount: "100.00",
            date: 1603065600000,
            id: "1d18593a-edb4-4293-a678-8fd8b23f74e1"
          },
          {
            date: 1602806400000,
            category: "Vie quotidienne",
            type: "expanse",
            amount: "41.89",
            labels: [],
            id: "96ad14b2-699d-4023-8a0e-2be153c82a7c"
          },
          {
            date: 1602806400000,
            type: "expanse",
            labels: [],
            amount: "19.50",
            category: "Loisirs",
            id: "8582e7c7-1b06-4f0c-a9c2-affd29031c02"
          },
          {
            labels: [],
            type: "expanse",
            amount: "20.00",
            date: 1602720000000,
            category: "Dépenses d'épargne",
            id: "7bb64d11-6da3-4b01-a0cf-effc1659c140"
          },
          {
            type: "expanse",
            amount: "50.63",
            category: "Vie quotidienne",
            date: 1602633600000,
            labels: [],
            id: "bc98ae35-034f-48cc-817b-261bd31e6ab2"
          },
          {
            category: "Loisirs",
            date: 1602547200000,
            type: "expanse",
            amount: "19.20",
            labels: [],
            id: "a9d1483f-5e4f-4316-9ad1-e09e5a3ce618"
          },
          {
            labels: [],
            date: 1602460800000,
            category: "Cadeaux et solidarité",
            type: "expanse",
            amount: "10.00",
            id: "ecf9b6ce-c04c-4fcf-8cdf-fe998c073ce8"
          },
          {
            date: 1602460800000,
            category: "Logement",
            labels: [],
            amount: "35.00",
            type: "expanse",
            id: "e0363a1f-128c-4dee-b0ac-49993cf62cf5"
          },
          {
            labels: [],
            amount: "45.17",
            category: "Dépenses d'épargne",
            date: 1602460800000,
            type: "expanse",
            id: "df8f6277-a671-4684-a534-e5d8ec759f44"
          },
          {
            labels: [],
            amount: "30.97",
            date: 1602460800000,
            category: "Vie quotidienne",
            type: "expanse",
            id: "cf775d03-4d9f-48cf-b283-38cde6bff019"
          },
          {
            labels: [],
            amount: "7.50",
            category: "Loisirs",
            date: 1602460800000,
            type: "expanse",
            id: "b41b03ca-946d-4022-a0b3-3bdbc172ac44"
          },
          {
            labels: [],
            date: 1602460800000,
            category: "Logement",
            type: "expanse",
            amount: "130.00",
            id: "5baf26b7-0697-44b7-94c4-aff125c1c615"
          },
          {
            amount: "39.00",
            date: 1602460800000,
            type: "expanse",
            labels: [],
            category: "Non catégorisé",
            id: "2ae9b3ab-e2e3-456b-aa01-08a595b048f9"
          },
          {
            labels: [],
            category: "Santé",
            type: "expanse",
            amount: "6.90",
            date: 1602460800000,
            id: "0c9f8de7-5d50-42d2-9150-b752e4bb72c0"
          },
          {
            type: "expanse",
            labels: [],
            amount: "300.95",
            category: "Logement",
            date: 1602201600000,
            id: "e83a84d3-87d7-4c2c-8880-50559bcb898c"
          },
          {
            category: "Auto & Moto",
            type: "expanse",
            labels: [],
            date: 1602201600000,
            amount: "20.05",
            id: "17b3ac9e-61da-4c43-bc2c-0a0466b34827"
          },
          {
            category: "Vie quotidienne",
            amount: "32.00",
            type: "expanse",
            labels: [],
            date: 1602115200000,
            id: "d709f0aa-6c8f-44b7-a1f0-142464f9f941"
          },
          {
            date: 1602115200000,
            type: "expanse",
            labels: [],
            amount: "15.54",
            category: "Vie quotidienne",
            id: "8fbf16c8-fa6d-4076-bc9b-063be1ccb181"
          },
          {
            date: 1602115200000,
            type: "expanse",
            labels: [],
            category: "Loisirs",
            amount: "7.00",
            id: "7b985e6b-366d-4755-bec0-8bda9711e9c5"
          },
          {
            amount: "14.99",
            date: 1602115200000,
            type: "expanse",
            category: "Abonnements & téléphonie",
            labels: [],
            id: "3573fe4e-53ab-45ef-ba56-22c673805da6"
          },
          {
            labels: [],
            date: 1602115200000,
            type: "expanse",
            category: "Loisirs",
            amount: "3.99",
            id: "08fc23e6-db72-4afb-8832-39d66c29cbf7"
          },
          {
            date: 1602028800000,
            labels: [],
            amount: "492.00",
            category: "Virements reçus",
            type: "income",
            id: "96c76623-8776-44fe-be9f-378a056a1cfd"
          },
          {
            category: "Loisirs",
            amount: "6.60",
            labels: [],
            date: 1602028800000,
            type: "expanse",
            id: "864813d6-a6d9-4d5e-af1a-e4179b39b141"
          },
          {
            labels: [],
            amount: "0.84",
            category: "Services financiers & professionnels",
            type: "expanse",
            date: 1602028800000,
            id: "430b46e1-9df3-4d4a-b989-c43d6095aaf9"
          },
          {
            date: 1601942400000,
            labels: [],
            type: "expanse",
            category: "Chèques",
            amount: "21.40",
            id: "7eb741a2-5909-42f1-a53c-ba8cc2dbc0b0"
          },
          {
            labels: [],
            type: "expanse",
            category: "Santé",
            amount: "50.00",
            date: 1601942400000,
            id: "60fed874-53ed-4e75-9836-07c1f99aab2a"
          },
          {
            amount: "3.40",
            date: 1601856000000,
            category: "Vie quotidienne",
            labels: [],
            type: "expanse",
            id: "9133d1c1-20de-4da9-865c-92e7c53844c9"
          },
          {
            category: "Vie quotidienne",
            labels: [],
            amount: "163.83",
            type: "expanse",
            date: 1601856000000,
            id: "84ca5d82-e8c9-4916-8c0f-d4d3f0bf1e5b"
          },
          {
            labels: [],
            date: 1601856000000,
            type: "expanse",
            amount: "2.15",
            category: "Auto & Moto",
            id: "4efcd99b-b9ad-4ce4-bcbb-2fa551ad8e3d"
          },
          {
            type: "expanse",
            category: "Auto & Moto",
            date: 1601856000000,
            labels: [],
            amount: "17.55",
            id: "0ff986aa-a873-447d-8583-b4a77875e9d0"
          },
          {
            amount: "2.50",
            category: "Virements reçus",
            date: 1601510400000,
            labels: [],
            type: "expanse",
            id: "e35a7def-9422-4326-afc6-6819d94527af"
          },
          {
            labels: [],
            type: "expanse",
            category: "Abonnements & téléphonie",
            amount: "10.00",
            date: 1601510400000,
            id: "c2e7f2db-ef00-44b5-8316-6149cb6aa680"
          },
          {
            type: "expanse",
            category: "Auto & Moto",
            date: 1601510400000,
            labels: [],
            amount: "31.76",
            id: "a0892e13-764b-4182-b337-a99bca2ba7e2"
          },
          {
            category: "Virements émis",
            type: "expanse",
            labels: [],
            amount: "980.00",
            date: 1601510400000,
            id: "1a9aa397-3ab0-46f4-a9be-f285a5842c1e"
          }
        ]
      }
    ]*/
  }),
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    },
    fetchData(state, payload) {
      state.accounts = [];
      const accounts = db
        .collection("users")
        .doc(payload.userUid)
        .collection("budget");

      accounts
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            if (doc.exists) {
              const bankName = doc.data().bank;
              accounts
                .doc(bankName)
                .collection("entries")
                .orderBy("date", "desc")
                .get()
                .then((entriesData) => {
                  const entries = [];
                  entriesData.forEach((entry) => {
                    const data = entry.data();
                    data.id = entry.id;
                    entries.push(data);
                  });
                  state.accounts.push({
                    bank: bankName,
                    entries: entries
                  });
                })
                .catch((error) => {
                  console.error("Error getting entry document:", error);
                });
            } else {
              // doc.data() will be undefined in this case
              console.error("No such document!");
            }
          });
        })
        .catch((error) => {
          console.error("Error getting bank document:", error);
        });
    }
  },
  actions: {}
});

export default accountsStore;
