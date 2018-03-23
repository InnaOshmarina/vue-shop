export const categories = [
  {category_id: 'all', name:'Все товары'},
  {category_id: 1, name:'Кондиционеры'},
  // к реализации:
  // {category_id: 1, name:'Кондиционеры', children: [{}, {}, {}]},
  {category_id: 2, name:'Ноутбуки'},
  {category_id: 3, name:'Офисные кресла'},
  {category_id: 4, name:'Пылесосы'}
];

// export const goods = [
//   { id: 1,
//     category_id: 2, 
//     name: 'Apple MacBook Air 13" (2017 год) [MQD32]',
//     description: '13.3" 1440 x 900 глянцевый, Intel Core i5 5350U 1800 МГц, 8 ГБ, 128 ГБ (SSD), Intel HD Graphics 6000, OS X, цвет крышки серебристый, цвет корпуса серебристый',
//     price: '2029,65' 
//   },
//   {
//     id: 2,
//     category_id: 2,
//     name: 'Apple MacBook Pro 15" Touch Bar (2016 год) [MLW72]',
//     description: '15.4" 2880 x 1800 глянцевый, Intel Core i7 2600 МГц, 16 ГБ, 256 ГБ (SSD), AMD Radeon Pro 450, Mac OS, цвет крышки серебристый, цвет корпуса серебристый',
//     price: '4570,00'
//   },
//   {
//     id: 9,
//     category_id: 4,
//     name: 'Samsung VC20M2560JP/EV',
//     description: 'бытовой для сухой уборки, пылесборник: мешок, мощность всасывания: 460 Вт, потребление: 2000 Вт, труба: сталь, регулировка мощности на ручке, шум 83 дБ, турбощетка',
//     price: '225,00'
//   },
//   { 
//     id: 3,
//     category_id: 2,
//     name: 'Lenovo Legion Y520-15 [80WK002MRK]',
//     description: '15.6" 1920 x 1080 матовый, Intel Core i7 7700HQ 2800 МГц, 8 ГБ, 1000 ГБ (HDD), NVIDIA GeForce GTX 1050, Windows 10, цвет крышки черный, цвет корпуса черный',
//     price: '2090,50'
//   },
//   { 
//     id: 4,
//     category_id: 2,
//     name: 'Acer Aspire E5-575G-39DD [NX.GDWER.033]',
//     description: '15.6" 1920 x 1080 матовый, Intel Core i7 7700HQ 2800 МГц, 8 ГБ, 1000 ГБ (HDD), NVIDIA GeForce GTX 1050, Windows 10, цвет крышки черный, цвет корпуса черный',
//     price: '1319,00'
//   },
//   {
//     id: 5,
//     category_id: 2,
//     name: 'ASUS D541NC-GQ100',
//     description: '15.6" 1366 x 768 матовый, Intel Celeron N3450 1100 МГц, 4 ГБ, 500 ГБ (HDD), NVIDIA GeForce 810M, Endless, цвет крышки темно-коричневый, цвет корпуса серый',
//     price: '695,76'
//   },
//   {
//     id: 6,
//     category_id: 2,
//     name: 'Acer Aspire VX15 VX5-591G-53AU [NH.GM4EU.019]',
//     description: '15.6" 1920 x 1080 матовый, Intel Core i5 7300HQ 2500 МГц, 8 ГБ, 1000 ГБ (HDD), NVIDIA GeForce GTX 1050 Ti, Linux, цвет крышки черный, цвет корпуса черный',
//     price: '2080,00'
//   },
//   {
//     id: 7,
//     category_id: 2,
//     name: 'Apple MacBook Pro 13" Retina (2015 год) [MF839]',
//     description: '13.3" 2560 x 1600 глянцевый, Intel Core i5 2700 МГц, 8 ГБ, 128 ГБ (SSD), Intel Iris Graphics 6100, OS X, цвет крышки серебристый, цвет корпуса серебристый',
//     price: '3040,00'
//   },
//   {
//     id: 10,
//     category_id: 4,
//     name: 'Bosch BGS1U1805',
//     description: 'бытовой для сухой уборки, пылесборник: контейнер, потребление: 1800 Вт, регулировка мощности на корпусе',
//     price: '290,00'
//   },
//   {
//     id: 8,
//     category_id: 2,
//     name: 'HP ProBook 450 G4 Y8A42EA',
//     description: '15.6" 1366 x 768 матовый, Intel Core i5 7200U 2500 МГц, 8 ГБ, 1000 ГБ (HDD), Intel HD Graphics 620, DOS, цвет крышки серебристый, цвет корпуса серебристый',
//     price: '1473,80'
//   },
//   {
//     id: 11,
//     category_id: 4,
//     name: 'Karcher FC 5 Premium (белый)',
//     description: 'бытовой моющий, пылесборник: контейнер, потребление: 460 Вт, без регулировки мощности, турбощетка',
//     price: '604,00'
//   },
//   {
//     id: 12,
//     category_id: 4,
//     name: 'Philips FC6402/01',
//     description: 'бытовой моющий, пылесборник: контейнер, регулировка мощности на ручке, шум 83 дБ, турбощетка',
//     price: '550,00'
//   },
//   {
//     id: 13,
//     category_id: 1,
//     name: 'Gree Bora GWH09AAA-K3NNA2A',
//     description: 'сплит-система, настенный блок, мощность охлаждения 2.55 кВт, мощность обогрева 2.65 кВт, шум 26-40 дБ',
//     price: '760,50'
//   },
//   {
//     id: 14,
//     category_id: 1,
//     name: 'Mitsubishi Heavy Industries SRK25ZSPR-S/SRC25ZSPR-S',
//     description: 'сплит-система, настенный блок, инвертор, мощность охлаждения 2.5 кВт, мощность обогрева 2.8 кВт, шум 23-45 дБ',
//     price: '1422,89'
//   },
//   {
//     id: 15,
//     category_id: 1,
//     name: 'Mitsubishi Heavy Industries SCM40ZS-S',
//     description: 'внешний блок, мощность охлаждения 4 кВт, мощность обогрева 4.5 кВт',
//     price: '2603,00'
//   },
//   {
//     id: 16,
//     category_id: 3,
//     name: 'Metta Samurai S1 (серый)',
//     description: 'кресло для руководителя, спинка сетка, обивка: ткань, механизм мультиблок',
//     price: '540,00'
//   },
//   {
//     id: 17,
//     category_id: 3,
//     name: 'Calviano Meracles',
//     description: 'кресло для руководителя, спинка цельная, обивка: искусственная кожа',
//     price: '247,00'
//   },
//   {
//     id: 18,
//     category_id: 3,
//     name: 'Metta LK-15CH (бежевый)',
//     description: 'кресло для руководителя, спинка цельная, обивка: натуральная кожа, механизм топ-ган (DMS)',
//     price: '430,00'
//   },
// ];

  