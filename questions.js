const questions = [
  {
    "id": 1,
    "topic": "Muskuloskeletal & Bedah",
    "question": "Seorang pria berusia 58 tahun datang dengan keluhan nyeri pada lutut kiri sejak 12 jam sebelum masuk rumah sakit. Lutut tampak merah dan bengkak. Sekitar 1 tahun yang lalu, pasien mengalami keluhan serupa pada ibu jari kaki kanan. Pemeriksaan fisik: pasien tampak obesitas, compos mentis, tekanan darah 160/90 mmHg, frekuensi nadi 98x/menit, frekuensi napas 20x/menit, tidak demam, VAS 6. Lutut kiri tampak kemerahan, bengkak, hangat, nyeri tekan, dan rentang gerak menurun. Ditemukan tofus pada sendi MTP1 kanan. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Osteoartritis",
      "B. Gout artritis akut (Acute gout arthritis)",
      "C. Artritis reumatoid",
      "D. Artritis reaktif",
      "E. Artritis psoriatik"
    ],
    "answer": 1,
    "rationale": "Serangan monoartritis akut (onset <24 jam) dengan tanda inflamasi klasik (kemerahan, bengkak, hangat, nyeri tekan) disertai riwayat podagra pada sendi MTP-1 dan temuan tofus merupakan gambaran khas gout artritis akut."
  },
  {
    "id": 2,
    "topic": "Pediatri / Anak",
    "question": "Seorang anak perempuan berusia 6 tahun dirawat di rumah sakit dengan demam, sakit tenggorokan, dan batuk. Pemeriksaan fisik menunjukkan adanya pseudomembran pada mukosa faring yang mudah berdarah saat diangkat. Pemeriksaan laboratorium dari usap tenggorokan menunjukkan Corynebacterium diphtheriae. Pasien tidak memiliki gejala lain. Bagaimana mekanisme kerja toksin yang dihasilkan oleh bakteri penyebab kasus ini?",
    "options": [
      "A. Menghambat penyinyalan pada sel saraf",
      "B. Menghambat transmiter inhibitorik pada sel saraf",
      "C. Bertindak sebagai superantigen",
      "D. Meningkatkan cAMP",
      "E. Menghambat sintesis protein (Inhibits protein synthesis)"
    ],
    "answer": 4,
    "rationale": "Eksotoksin Corynebacterium diphtheriae bekerja dengan menginaktivasi elongation factor-2 (EF-2) melalui proses ADP-ribosilasi, sehingga menghambat sintesis protein seluler dan menyebabkan nekrosis jaringan (pseudomembran)."
  },
  {
    "id": 3,
    "topic": "Infeksi Tropis & Imunologi",
    "question": "Seorang pria berusia 36 tahun yang tinggal di Bekasi mengalami demam berulang dan pembesaran skrotum selama tiga tahun terakhir. Baru-baru ini, ia mengeluhkan buang air kecil berwarna putih seperti susu (chyluria). Urin berwarna putih seperti susu tersebut disebabkan oleh:",
    "options": [
      "A. Akumulasi cairan di tunika vaginalis",
      "B. Proteinuria",
      "C. Sumbatan pembuluh limfe pada kulit skrotum",
      "D. Ruptur pembuluh limfe di pelvis renalis akibat obstruksi",
      "E. Destruksi sel darah merah, menyebabkan peningkatan kadar hemoglobin"
    ],
    "answer": 3,
    "rationale": "Pada filariasis limfatik kronis (terutama Wuchereria bancrofti), obstruksi saluran limfe retroperitoneal meningkatkan tekanan limfatik hingga menyebabkan dilatasi dan ruptur pembuluh limfe ke dalam pelvis renalis, sehingga cairan kilus bercampur dengan urin (kiluria)."
  },
  {
    "id": 4,
    "topic": "Neurologi",
    "question": "Seorang pria berusia 50 tahun dibawa ke IGD rumah sakit dengan penurunan kesadaran sejak 2 jam yang lalu. Pasien tidak responsif, jalan napas paten, frekuensi napas 10x/menit dan teratur, saturasi oksigen 100%, frekuensi jantung 96x/menit dan teratur, tekanan darah 210/100 mmHg, dan akral hangat. Glasgow Coma Scale E2M2V1. Pupil 3 mm/3 mm dan reaktif bilateral, refleks kornea tidak ada secara bilateral, dan tidak ada tanda-tanda lateralisasi. CT scan kepala tanpa kontras menunjukkan tidak ada infark, perdarahan, atau proses desak ruang (space-occupying lesion). Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Perdarahan subaraknoid",
      "B. Meningitis bakteri",
      "C. Ensefalitis virus",
      "D. Stroke iskemik",
      "E. Posterior reversible encephalopathy syndrome (PRES)"
    ],
    "answer": 4,
    "rationale": "Penurunan kesadaran akut disertai krisis hipertensi (TD 210/100 mmHg) tanpa tanda lateralisasi serta hasil CT scan kepala tanpa kontras yang menyingkirkan perdarahan atau infark mengarah pada ensefalopati hipertensif atau Posterior Reversible Encephalopathy Syndrome (PRES)."
  },
  {
    "id": 5,
    "topic": "Respirasi & Pulmonologi",
    "question": "Seorang anak perempuan berusia 12 tahun dibawa ke UGD oleh ibunya karena mengalami sesak napas sejak 1 jam yang lalu. Napasnya berbunyi mengi (wheezing). Setelah dilakukan pemeriksaan, dokter mendiagnosisnya dengan asma bronkial. Bagaimana beban kerja pernapasan (workload of breathing) pada pasien ini?",
    "options": [
      "A. Meningkat karena peningkatan kebutuhan ventilasi",
      "B. Meningkat karena peningkatan resistensi jalan napas (Increased due to increased airway resistance)",
      "C. Menurun karena peningkatan resistensi jalan napas",
      "D. Meningkat karena penurunan elastisitas paru",
      "E. Meningkat karena penurunan komplians paru"
    ],
    "answer": 1,
    "rationale": "Pada serangan asma bronkial, terjadi bronkokonstriksi, edema mukosa, dan hipersekresi mukus yang menyempitkan lumen saluran napas, sehingga meningkatkan resistensi jalan napas dan meningkatkan beban kerja pernapasan."
  },
  {
    "id": 6,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Salah satu rekomendasi GERMAS adalah melakukan aktivitas fisik minimal 30 menit per hari. Anda adalah seorang dokter di puskesmas dan menasihati seorang pasien yang telah menderita diabetes selama 5 tahun untuk melakukan aktivitas fisik secara teratur. Rekomendasi ini sesuai dengan tingkat pencegahan yang mana?",
    "options": [
      "A. Pembatasan kecacatan (Disability limitation)",
      "B. Rehabilitasi",
      "C. Diagnosis dini dan pengobatan segera",
      "D. Perlindungan khusus",
      "E. Promosi kesehatan"
    ],
    "answer": 0,
    "rationale": "Berdasarkan tahapan pencegahan Leavell dan Clark, edukasi aktivitas fisik sebagai bagian dari tatalaksana pada pasien yang telah lama menderita diabetes melitus (5 tahun) bertujuan mencegah komplikasi lebih lanjut dan membatasi kecacatan (disability limitation)."
  },
  {
    "id": 7,
    "topic": "Nefrologi & Urologi",
    "question": "Pasangan suami istri datang ke rumah sakit dengan keluhan belum memiliki anak setelah lima tahun menikah. Setelah dilakukan pemeriksaan genitalia eksterna, tes Valsalva, dan USG, ditemukan adanya pelebaran pembuluh darah vena yang berjalan di sepanjang korda spermatika. Pembuluh darah manakah yang abnormal pada kasus ini?",
    "options": [
      "A. Vena pampiniformis (Pampiniform plexus/vein)",
      "B. Arteri testikularis",
      "C. Arteri deferensial",
      "D. Vena testikularis",
      "E. Vena deferensial"
    ],
    "answer": 0,
    "rationale": "Varikokel merupakan dilatasi abnormal dan berkelok-kelok dari pleksus venosus pampiniformis di sepanjang korda spermatika yang dapat mengganggu termoregulasi testis dan menyebabkan infertilitas pria."
  },
  {
    "id": 8,
    "topic": "Obstetri & Ginekologi",
    "question": "Ny. D, 25 tahun, baru saja melahirkan anak pertamanya secara pervaginam 10 menit yang lalu, bayi perempuan sehat dengan berat 3000 gram dan menangis kuat. Pasien sangat ingin menjarangkan kehamilan berikutnya minimal 3 tahun. Dari rekam medis, tidak ada riwayat penyakit berat dan pasien tidak sedang mengonsumsi obat-obatan. Apakah pilihan metode kontrasepsi terbaik untuk pasien ini?",
    "options": [
      "A. Kontrasepsi suntik 3 bulan",
      "B. Pemasangan AKDR/IUD (IUD insertion)",
      "C. Metode kontrasepsi mantap/pembatas (Barrier method)",
      "D. Pil kontrasepsi kombinasi",
      "E. Metode kalender"
    ],
    "answer": 1,
    "rationale": "Pemasangan Alat Kontrasepsi Dalam Rahim (AKDR/IUD) pascaplasenta (dalam 10 menit hingga 48 jam pascapersalinan) merupakan metode kontrasepsi jangka panjang (MKJP) pilihan utama untuk menjarangkan kehamilan minimal 3 tahun dan tidak mengganggu produksi ASI."
  },
  {
    "id": 9,
    "topic": "Nefrologi & Urologi",
    "question": "Pasien Anda melaporkan bahwa ia sering mengonsumsi obat pereda nyeri bebas (OTC) setiap kali mengalami nyeri sendi. Efek samping apa yang dapat terjadi jika obat-obatan ini diminum secara teratur dalam jangka panjang?",
    "options": [
      "A. Memicu nefropati (Trigger nephropathy)",
      "B. Memicu neuropati",
      "C. Menurunkan sistem kekebalan tubuh",
      "D. Menyebabkan hipotensi",
      "E. Menyebabkan hipoglikemia"
    ],
    "answer": 0,
    "rationale": "Konsumsi obat antiinflamasi nonsteroid (OAINS) atau analgesik bebas secara rutin dalam jangka panjang menghambat sintesis prostaglandin vasodilator renal, menyebabkan vasokonstriksi arteriol aferen, iskemia medula ginjal, dan memicu nefropati analgesik."
  },
  {
    "id": 10,
    "topic": "Mata (Oftalmologi)",
    "question": "Seorang wanita berusia 19 tahun datang dengan keluhan mata kanan merah dan kabur sejak 1 minggu yang lalu. Keluhan disertai nyeri, berair, sensasi benda asing, dan kotoran pada mata kanan. Lima hari yang lalu, pasien berobat ke dokter umum dan diberi tetes mata Xitrol 2 kali sehari pada mata kanan, namun tidak ada perbaikan. Pasien juga mengeluhkan adanya bercak putih pada mata kanan yang terasa semakin membesar dalam 3 hari terakhir. Pasien menggunakan lensa kontak pada kedua mata karena riwayat miopia (-3.00 pada kedua mata). Lensa kontak sering digunakan hingga pasien tertidur. Sejak pasien merasa lesi putih di mata kanan membesar, lensa kontak tidak lagi digunakan. Apakah diagnosis yang paling mungkin pada pasien ini?",
    "options": [
      "A. Ulkus kornea (Corneal ulcer)",
      "B. Glaukoma akut",
      "C. Konjungtivitis",
      "D. Ruptur kornea",
      "E. Uveitis anterior"
    ],
    "answer": 0,
    "rationale": "Keluhan mata merah disertai penurunan visus, nyeri, sekret, dan bercak putih (infiltrat/defek epitel) pada kornea yang membesar dengan riwayat penggunaan lensa kontak saat tidur serta pemakaian tetes mata steroid merupakan gambaran khas ulkus kornea."
  },
  {
    "id": 11,
    "topic": "Endokrin & Metabolik",
    "question": "Seorang wanita berusia 55 tahun dibawa ke UGD dengan riwayat kejang berulang dalam 3 jam terakhir. Menurut saksi, keempat ekstremitas pasien menjadi kaku, diikuti gerakan menghentak selama 1-2 menit, dan setelah itu pasien tidak sadarkan diri. Di UGD: pemeriksaan fisik menunjukkan tekanan darah 130/85 mmHg, frekuensi nadi 90x/menit, frekuensi napas 20x/menit, suhu 36.9°C saturasi oksigen 99% pada udara ruangan, Glasgow Coma Scale E2M5V2, pupil 3 mm/3 mm dan reaktif bilateral, tidak ada tanda lateralisasi. Pemeriksaan gula darah sewaktu (bedside) menunjukkan 53 mg/dL Pasien kemudian mengalami kejang tonik-klonik umum lagi dengan deskripsi yang sama, dimulai sejak 5 menit yang lalu. Apakah langkah selanjutnya yang paling tepat untuk pasien ini?",
    "options": [
      "A. CT scan kepala dengan kontras",
      "B. Bolus intravena Dextrose 40% 50 cc (Intravenous bolus of 40% dextrose 50 cc)",
      "C. Midazolam intramuskular 10 mg",
      "D. Intubasi endotrakeal",
      "E. Oksigen 6 liter/menit"
    ],
    "answer": 1,
    "rationale": "Kejang dan penurunan kesadaran pada pasien ini dipicu oleh hipoglikemia berat (GDS 53 mg/dL dengan gejala neuroglikopenik), sehingga tatalaksana lini pertama yang paling tepat adalah koreksi glukosa segera dengan bolus intravena Dextrose 40% sebanyak 50 cc (2 flakon)."
  },
  {
    "id": 12,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang wanita berusia 39 tahun mengeluhkan sering pegal dan kram pada betis kiri saat berdiri lama, yang berkurang jika pasien aktif bergerak. Pemeriksaan fisik menemukan pelebaran pembuluh darah kulit di fosa poplitea dan hiperpigmentasi pada kulit tungkai. Apakah terapi utama untuk kelainan ini?",
    "options": [
      "A. Olahraga",
      "B. Obat-obatan",
      "C. Skleroterapi",
      "D. Prosedur bedah",
      "E. Penggunaan stoking kompresi"
    ],
    "answer": 4,
    "rationale": "Keluhan pegal dan kram saat berdiri lama disertai varises dan hiperpigmentasi kulit tungkai merupakan manifestasi Insufisiensi Vena Kronis (Chronic Venous Insufficiency), yang memiliki terapi konservatif utama lini pertama berupa penggunaan stoking kompresi."
  },
  {
    "id": 13,
    "topic": "Pediatri / Anak",
    "question": "Anak laki-laki berusia 4 tahun, berat badan 16 kg, dibawa ke klinik dengan bengkak di seluruh tubuh sejak 5 hari yang lalu. Buang air kecil berkurang dan warnanya agak keruh. Pemeriksaan fisik: sadar, tanda vital normal, edema pada kedua kelopak mata, tungkai dan kaki, serta terdapat asites. Pemeriksaan laboratorium: urin: proteinuria +4, sedimen: leukosit 1-3/LPB, eritrosit 2-3/LPB; darah: albumin 1,3 g/dL kolesterol 490 mg/dL. Apakah patogenesis terjadinya edema anasarka pada pasien ini?",
    "options": [
      "A. Penurunan tekanan pada saluran limfatik",
      "B. Peningkatan volume intravaskular",
      "C. Peningkatan permeabilitas vaskular",
      "D. Peningkatan tekanan intravaskular",
      "E. Penurunan tekanan onkotik plasma"
    ],
    "answer": 4,
    "rationale": "Pada sindrom nefrotik, proteinuria masif (+4) menyebabkan hipoalbuminemia berat (1,3 g/dL) yang menurunkan tekanan onkotik plasma intravaskular, sehingga cairan mengalami ekstravasasi ke ruang interstisial dan menimbulkan edema anasarka."
  },
  {
    "id": 14,
    "topic": "Gastroenterohepatologi",
    "question": "Remaja perempuan berusia 16 tahun datang dengan diare cair yang sangat profus dan muntah selama 2 hari terakhir. Diarenya seperti air cucian beras. Tanda-tanda vital menunjukkan tekanan darah 90/60 mmHg, frekuensi nadi 128x/menit, frekuensi napas 20x/menit. Pada pemeriksaan, pasien tampak pucat dengan mukosa yang sangat kering. Apa yang mungkin ditemukan dari pemeriksaan kultur feses?",
    "options": [
      "A. Bakteri Gram-negatif dari spesies Klebsiella",
      "B. Bakteri Gram-negatif dari spesies Aeromonas",
      "C. Bakteri Gram-positif dari spesies Staphylococcus",
      "D. Bakteri Gram-negatif dari spesies Vibrio",
      "E. Bakteri Gram-negatif dari spesies Pseudomonas"
    ],
    "answer": 3,
    "rationale": "Diare cair profus menyerupai air cucian beras (rice-water stool) disertai dehidrasi berat merupakan gambaran klasik kolera yang disebabkan oleh infeksi bakteri batang lengkung Gram-negatif dari spesies Vibrio cholerae."
  },
  {
    "id": 15,
    "topic": "Muskuloskeletal & Bedah",
    "question": "Wanita berusia 54 tahun didiagnosis dengan tanda dan gejala yang konsisten dengan artritis reumatoid. Dokter memutuskan untuk meresepkan OAINS. Manakah dari kondisi berikut yang harus dihindari saat meresepkan selekoksib?",
    "options": [
      "A. Riwayat gout",
      "B. Riwayat infark miokard",
      "C. Riwayat konsumsi alkohol",
      "D. Riwayat osteoporosis",
      "E. Riwayat penyakit ulkus peptikum"
    ],
    "answer": 1,
    "rationale": "Selekoksib merupakan penghambat selektif COX-2 yang menekan produksi prostasiklin (vasodilator dan penghambat agregasi trombosit) tanpa menghambat tromboksan A2, sehingga meningkatkan risiko trombosis kardiovaskular dan dikontraindikasikan pada pasien dengan riwayat infark miokard."
  },
  {
    "id": 16,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Anda saat ini adalah seorang peneliti muda di lembaga penelitian terkemuka di Indonesia. Anda mengamati tren gaya hidup anak-anak yang mengonsumsi minuman berkarbonasi. Anda khawatir apakah kebiasaan minum soda ini dapat berdampak pada insidensi diabetes melitus (DM) di masa depan. Anda mencoba mencari bukti ilmiah yang ada sebelum merumuskan masalah ini dalam bentuk proposal penelitian. Jika Anda mencari di PubMed, kata kunci yang tepat adalah:",
    "options": [
      "A. (carbonated drink AND soda) AND (diabetes AND hyperglycemic)",
      "B. carbonated drink OR (soda AND diabetes) OR hyperglycemic",
      "C. (carbonated drink OR soda AND diabetes) OR hyperglycemic",
      "D. (carbonated drink OR soda) AND (diabetes OR hyperglycemic)",
      "E. (carbonated drink AND diabetes) OR (soda AND hyperglycemic)"
    ],
    "answer": 3,
    "rationale": "Dalam penyusunan kata kunci pencarian literatur berbasis PICO, sinonim dalam satu elemen digabungkan menggunakan operator Boolean OR di dalam tanda kurung, sedangkan antar-elemen yang berbeda dihubungkan menggunakan operator AND."
  },
  {
    "id": 17,
    "topic": "Respirasi & Pulmonologi",
    "question": "Seorang pria berusia 24 tahun datang ke klinik dengan keluhan batuk berdahak disertai menggigil selama sebulan terakhir. Batuk mengeluarkan dahak berwarna kehijauan, kadang bercampur darah. Pagi ini, pasien melaporkan batuk mengeluarkan dahak sebanyak setengah gelas air. Ia mengeluhkan demam ringan, terutama pada sore hari. Ia juga mengeluhkan penurunan nafsu makan. Berat badannya turun sekitar 3 kg dalam sebulan terakhir. Ia terkadang mengalami keringat malam. Berdasarkan kondisi pasien, kegawatdaruratan respirasi manakah yang harus dipertimbangkan?",
    "options": [
      "A. Batuk berdahak",
      "B. Keringat malam",
      "C. Batuk dan menggigil",
      "D. Batuk darah (coughing up blood / hemoptisis)",
      "E. Demam"
    ],
    "answer": 3,
    "rationale": "Batuk darah (hemoptisis) pada kecurigaan tuberkulosis paru merupakan kegawatdaruratan respirasi karena berisiko tinggi menyebabkan asfiksia akibat sumbatan bekuan darah di jalan napas serta syok hipovolemik."
  },
  {
    "id": 18,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang wanita berusia 45 tahun datang ke poliklinik rawat jalan dengan keluhan sesak napas yang semakin memberat selama 6 bulan terakhir. Pasien membawa hasil pemeriksaan ekokardiografi yang menunjukkan dilatasi ventrikel kiri dan regurgitasi aorta berat. Kelainan apa yang paling mungkin Anda temukan pada pemeriksaan fisik pasien ini?",
    "options": [
      "A. Perbedaan tekanan darah antara lengan kanan dan kiri > 20 mmHg",
      "B. Pulsus celer / water hammer pulse pada palpasi arteri femoralis",
      "C. Tekanan darah diastolik > 100 mmHg",
      "D. Bising awal diastolik (early diastolic murmur) dengan titik intensitas maksimal di garis midklavikula kiri",
      "E. Galop S4 pada auskultasi di batas sternal bawah kanan"
    ],
    "answer": 1,
    "rationale": "Pada regurgitasi aorta berat, aliran balik darah ke ventrikel kiri saat diastol menyebabkan pelebaran tekanan nadi (wide pulse pressure) yang bermanifestasi sebagai denyut nadi yang teraba menghentak kuat lalu kolaps dengan cepat (pulsus celer / water hammer pulse)."
  },
  {
    "id": 19,
    "topic": "Respirasi & Pulmonologi",
    "question": "Seorang pria berusia 62 tahun datang ke IGD RSUD dengan keluhan sesak napas. Pasien memiliki riwayat perokok berat. Dalam beberapa bulan terakhir, pasien sering batuk dan mengeluh sesak napas, yang memburuk dalam 1 minggu terakhir. Saat ini pasien tampak gelisah. Tekanan darah: 130/90 mmHg, denyut nadi: 110 kali/menit, frekuensi napas: 32 kali/menit. Hasil analisis gas darah arteri: pH: 7,28; pCO2: 54; pO2: 82; HCO3: 25; BE: 1,2; saturasi oksigen: 88%. Apakah interpretasi hasil analisis gas darah arteri pada kasus ini?",
    "options": [
      "A. Alkalosis respiratorik tidak terkompensasi",
      "B. Asidosis respiratorik tidak terkompensasi",
      "C. Alkalosis respiratorik terkompensasi",
      "D. Alkalosis respiratorik terkompensasi sebagian",
      "E. Asidosis respiratorik terkompensasi"
    ],
    "answer": 1,
    "rationale": "Penurunan pH menjadi 7,28 (< 7,35) disertai peningkatan pCO2 menjadi 54 mmHg (> 45 mmHg) menunjukkan asidosis respiratorik, sedangkan kadar HCO3 sebesar 25 mEq/L yang masih berada dalam rentang normal (22-26 mEq/L) menandakan belum adanya kompensasi metabolik."
  },
  {
    "id": 20,
    "topic": "Pediatri / Anak",
    "question": "Seorang anak perempuan berusia 5 tahun dengan berat badan 20 kg datang dengan keluhan utama demam sejak 4 hari yang lalu; saat ini demam sudah mulai turun, namun pagi ini terdapat sedikit mimisan (epistaksis). Pemeriksaan fisik menunjukkan tanda vital stabil, petekie pada lengan, nyeri perut kanan atas, dan hati teraba 3 cm di bawah tepi kosta. Pasien telah berobat ke klinik dan dirujuk ke rumah sakit dengan membawa hasil laboratorium: Hb 14,8 g/dL, Hct 46 vol%, leukosit 2100/μL, trombosit 65.000/μL. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Dengue dengan tanda bahaya (dengue with warning signs)",
      "B. Probable dengue",
      "C. Dengue tanpa tanda bahaya (dengue without warning signs)",
      "D. Dengue berat (severe dengue)",
      "E. Demam dengue (dengue fever)"
    ],
    "answer": 0,
    "rationale": "Berdasarkan klasifikasi WHO 2009, adanya perdarahan mukosa (epistaksis), nyeri perut, hepatomegali (> 2 cm), serta peningkatan hematokrit disertai penurunan trombosit pada pasien infeksi dengue dengan hemodinamik stabil memenuhi kriteria dengue dengan tanda bahaya (dengue with warning signs)."
  },
  {
    "id": 21,
    "topic": "Psikiatri",
    "question": "Tn. C, seorang pria berusia 37 tahun, datang ke puskesmas dengan keluhan sakit kepala dalam 6 bulan terakhir. Sakit kepala bersifat hilang timbul, berdenyut, dan sering terjadi ketika ia mengkhawatirkan sesuatu. Pasien sering memikirkan masa depan, pekerjaan, hubungan dengan pacarnya, dan keluarganya dalam kehidupan sehari-hari. Ia juga sering merasakan ketegangan otot dan kadang-kadang mengalami berdebar-debar. Pemeriksaan status mental menunjukkan suasana hati disforik, dengan preokupasi pada keluhan fisik dan masalah sehari-hari. Apakah diagnosis yang paling mungkin untuk pasien ini?",
    "options": [
      "A. Gangguan somatisasi",
      "B. Gangguan panik",
      "C. Gangguan cemas menyeluruh (generalized anxiety disorder)",
      "D. Gangguan penyesuaian dengan mood cemas",
      "E. Gangguan waham menetap"
    ],
    "answer": 2,
    "rationale": "Kecemasan berlebih terhadap berbagai masalah sehari-hari (free-floating anxiety) yang berlangsung selama minimal 6 bulan disertai ketegangan motorik (nyeri kepala, ketegangan otot) dan hiperaktivitas otonom (berdebar-debar) merupakan kriteria khas Gangguan Cemas Menyeluruh (GAD)."
  },
  {
    "id": 22,
    "topic": "Pediatri / Anak",
    "question": "Seorang anak berusia 10 bulan dibawa ke IGD dengan kejang disertai demam 2 jam yang lalu. Kejang terjadi satu kali, berupa kaku dan menghentak di seluruh tubuh, berlangsung selama 3 menit. Pasien telah mengalami demam sejak 16 jam sebelumnya. Pada pemeriksaan neurologis, anak compos mentis, aktif, tidak ada tanda meningeal, ubun-ubun besar terbuka dan datar, tonus normal, dan tidak ada defisit neurologis fokal. Ini merupakan kejang pertama pada pasien. Pemeriksaan penunjang apa yang diperlukan pada pasien ini?",
    "options": [
      "A. Elektroensefalografi (EEG)",
      "B. Gula darah sewaktu",
      "C. Tidak diperlukan pemeriksaan penunjang",
      "D. Elektrolit",
      "E. Pungsi lumbal"
    ],
    "answer": 2,
    "rationale": "Pasien mengalami kejang demam sederhana (kejang umum, durasi < 15 menit, tidak berulang dalam 24 jam) dengan pemeriksaan neurologis normal dan tanpa tanda meningeal, sehingga berdasarkan konsensus IDAI tidak diperlukan pemeriksaan penunjang rutin."
  },
  {
    "id": 23,
    "topic": "Neurologi",
    "question": "Seorang wanita berusia 50 tahun dibawa ke IGD rumah sakit dengan kejang berulang dalam 6 jam terakhir. Riwayat medis tidak diketahui karena ia tinggal sendiri di rumah kos. Tanda vital: tekanan darah 170/80 mmHg, nadi 106 kali/menit, frekuensi napas 28 kali/menit, suhu 36,5°C saturasi oksigen 98%. Glasgow Coma Scale E2M4V2, pupil anisokor (3 mm/5 mm) dengan refleks cahaya lambat bilateral, dan penurunan aktivitas pada ekstremitas kanan. Jenis herniasi apa yang terjadi pada pasien ini?",
    "options": [
      "A. Transkalvarial",
      "B. Upward",
      "C. Unkal",
      "D. Subfalsin",
      "E. Transtentorial sentral"
    ],
    "answer": 2,
    "rationale": "Trias penurunan kesadaran, dilatasi pupil ipsilateral (anisokor akibat kompresi nervus III), dan hemiparesis kontralateral (penurunan aktivitas ekstremitas kanan akibat kompresi pedunkulus serebri) merupakan tanda klasik herniasi unkal (transtentorial lateral)."
  },
  {
    "id": 24,
    "topic": "Pediatri / Anak",
    "question": "Seorang bayi berusia 8 bulan dibawa ke puskesmas dengan keluhan lemas selama dua bulan terakhir. Ia juga mengalami penurunan nafsu makan. Ibunya tidak menyadari pucat pada anaknya. Pemeriksaan fisik menunjukkan konjungtiva anemis dan tidak ada organomegali. Pemeriksaan tambahan menunjukkan kadar hemoglobin 8 g/dL hematokrit 24 vol%, jumlah leukosit 5.400/μL, jumlah trombosit 570.000/μL, dan LED 20 mm/jam. Apakah penyebab utama peningkatan jumlah trombosit pada kasus ini?",
    "options": [
      "A. Infeksi kronis",
      "B. Stimulasi trombopoietin kronis",
      "C. Stimulasi eritropoietin",
      "D. Pergeseran akumulasi jaringan (tissue pooling shift)",
      "E. Mutasi JAK2 V617F"
    ],
    "answer": 2,
    "rationale": "Pada anemia defisiensi besi, hipoksia jaringan memicu peningkatan sekresi eritropoietin (EPO) yang turut menstimulasi reseptor megakariosit/trombopoietin karena homologi struktural maupun jalur sinyal prekursor hematopoietik, sehingga menimbulkan trombositosis reaktif."
  },
  {
    "id": 25,
    "topic": "Psikiatri",
    "question": "Seorang laki-laki berusia 18 tahun dibawa oleh orang tuanya ke klinik Anda karena mereka mendapati anaknya sering bicara tidak nyambung dan meracau dalam 2 minggu terakhir, sehingga sulit dipahami. Menurut mereka, pasien menjadi lebih menarik diri, lebih banyak berdiam di kamar, hanya keluar untuk makan sehari sekali dan mandi beberapa hari sekali. Mereka juga mendengar pasien berbicara sendiri di kamarnya padahal tidak ada orang lain. Orang tua menyatakan bahwa pasien baru saja diberi tahu tidak lolos seleksi perguruan tinggi yang diinginkannya, namun mereka tidak melihat kesedihan yang berlebihan. Anda berencana memberikan terapi untuk pasien ini. Mekanisme kerja apa yang harus dimiliki oleh obat yang Anda resepkan?",
    "options": [
      "A. Agonis reseptor glutamat",
      "B. Antagonis reseptor noradrenalin",
      "C. Agonis reseptor serotonin",
      "D. Antagonis reseptor GABA",
      "E. Antagonis reseptor dopamin"
    ],
    "answer": 4,
    "rationale": "Pasien mengalami gangguan psikotik akut (onset 2 minggu) dengan gejala positif berupa inkoherensi dan halusinasi auditorik akibat hiperaktivitas dopamin di jalur mesolimbik, sehingga membutuhkan obat antipsikotik yang bekerja sebagai antagonis reseptor dopamin."
  },
  {
    "id": 26,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Michael, seorang dokter spesialis bedah ortopedi, hendak menyampaikan kabar buruk kepada pasien mengenai kanker tulang yang dideritanya dan perlunya tindakan amputasi. Michael menggunakan protokol SPIKES untuk menyampaikan berita buruk tersebut. Ia berusaha mencari tahu pemahaman pasien mengenai kondisinya. Langkah SPIKES manakah yang dilakukan Michael?",
    "options": [
      "A. Perception",
      "B. Emotion/Empathy",
      "C. Invitation",
      "D. Knowledge",
      "E. Setting"
    ],
    "answer": 0,
    "rationale": "Dalam protokol komunikasi penyampaian kabar buruk SPIKES, langkah untuk menilai apa yang sudah diketahui atau dipahami pasien mengenai kondisi medisnya adalah tahap Perception."
  },
  {
    "id": 27,
    "topic": "Obstetri & Ginekologi",
    "question": "Seorang wanita berusia 27 tahun saat ini berada pada usia kehamilan 12 minggu. Ia membayangkan perkembangan pembuluh darah janinnya. Sebagai seorang dokter, Anda memahami bahwa selama perkembangan sistem kardiovaskular janin, terjadi resistensi paru yang tinggi, menyebabkan sebagian besar darah dari jantung mengalir ke seluruh tubuh janin, dengan hanya sebagian kecil yang mengalir ke paru-paru. Penjelasan yang paling tepat untuk fenomena yang dialami janin selama perkembangan intrauterin adalah:",
    "options": [
      "A. Konstriksi tonik pada pembuluh darah paru",
      "B. Alveoli yang kolaps",
      "C. Cairan yang mengisi paru-paru",
      "D. Pembentukan foramen ovale",
      "E. Pembentukan duktus arteriosus"
    ],
    "answer": 0,
    "rationale": "Tingginya resistensi vaskular paru selama masa intrauterin terutama disebabkan oleh vasokonstriksi pulmonal hipoksik berupa konstriksi tonik pada pembuluh darah arteriol paru janin yang belum teroksigenasi."
  },
  {
    "id": 28,
    "topic": "Gastroenterohepatologi",
    "question": "Seorang pria berusia 35 tahun dibawa oleh istrinya ke IGD dengan nyeri perut disertai muntah sejak 1 hari yang lalu. Tiga minggu sebelumnya, pasien mengalami demam hilang timbul yang membaik setelah minum parasetamol. Keluhan disertai penurunan nafsu makan, sedangkan buang air besar dan buang air kecil dalam batas normal. Pada pemeriksaan fisik, keadaan umum lemah, lidah kotor, dan perut menunjukkan tanda-tanda peritonitis generalisata. Pekat hati menghilang. Pemeriksaan colok dubur menunjukkan ampula rekti kolaps. Pemeriksaan radiologi apa yang direkomendasikan untuk kasus ini?",
    "options": [
      "A. CT scan abdomen",
      "B. Foto polos abdomen (plain abdominal X-ray)",
      "C. Ultrasonografi (USG)",
      "D. BNO",
      "E. MRI"
    ],
    "answer": 1,
    "rationale": "Hilangnya pekak hati dan tanda peritonitis generalisata pascademam tifoid mengarah pada perforasi usus (pneumoperitoneum), di mana pemeriksaan radiologi awal yang direkomendasikan untuk mendeteksi udara bebas subdiafragma adalah foto polos abdomen (plain abdominal X-ray / 3 posisi)."
  },
  {
    "id": 29,
    "topic": "Endokrin & Metabolik",
    "question": "Seorang wanita berusia 52 tahun dengan diabetes melitus tipe 2 selama 8 tahun terakhir datang untuk kontrol rutin. Pemeriksaan laboratorium menunjukkan HbA1c 7,8%, kreatinin serum 1.2 mg/dL, eGFR 58 mL/min/1.73m². Rasio albumin-kreatinin urin (ACR) adalah 180 mg/g Pemeriksaan funduskopi menunjukkan retinopati diabetik non-proliferatif. Tekanan darah 145/90 mmHg. Pasien saat ini menggunakan metformin 1000 mg dua kali sehari dan amlodipin 5 mg sekali sehari. Apakah terapi tambahan yang PALING tepat untuk mencegah progresivitas nefropati diabetik pada pasien ini?",
    "options": [
      "A. Menambahkan allopurinol",
      "B. Mengganti amlodipin dengan ACE inhibitor atau ARB",
      "C. Menambahkan statin",
      "D. Menambahkan diuretik kuat (loop diuretic)",
      "E. Menambahkan insulin"
    ],
    "answer": 1,
    "rationale": "Pada pasien diabetes melitus tipe 2 disertai hipertensi dan albuminuria (ACR 180 mg/g), pemberian ACE inhibitor atau ARB merupakan terapi lini pertama pilihan karena efek renoprotektifnya dalam menurunkan tekanan intraglomerulus dan menghambat progresivitas nefropati diabetik."
  },
  {
    "id": 30,
    "topic": "Pediatri / Anak",
    "question": "Seorang anak perempuan berusia 1 tahun dibawa ke rumah sakit oleh ibunya dengan keluhan pucat sejak 3 bulan terakhir. Nafsu makannya menurun dan ia tampak lemas. Tidak terdapat perdarahan. Buang air besar dan buang air kecil dalam batas normal. Pemeriksaan fisik menunjukkan konjungtiva anemis dan hepatosplenomegali. Pemeriksaan menunjukkan kadar hemoglobin 7 g/dL, hematokrit 10 vol%, jumlah sel darah putih 11.700/μL, dan jumlah trombosit 256.000/μL. Berat badan pasien 10 kg. Pasien dijadwalkan untuk transfusi sel darah merah (PRC). Berapakah volume total sel darah merah yang ditransfusikan?",
    "options": [
      "A. 300 mL",
      "B. 150 mL",
      "C. 200 mL",
      "D. 250 mL",
      "E. 350 mL"
    ],
    "answer": 2,
    "rationale": "Berdasarkan rumus kebutuhan transfusi PRC pada anak yaitu ΔHb × BB (kg) × 4, dengan Hb awal 7 g/dL dan target Hb 12 g/dL (ΔHb = 5 g/dL) serta berat badan 10 kg, maka volume total PRC yang dibutuhkan adalah 5 × 10 × 4 = 200 mL."
  },
  {
    "id": 31,
    "topic": "Pediatri / Anak",
    "question": "Seorang anak laki-laki berusia 16 tahun datang ke dokter dengan keluhan lemas, muntah, dan diare. Pada pemeriksaan fisik, pasien masih sadar, tekanan darah 80/55 mmHg, denyut nadi 130 kali/menit, frekuensi napas 24 kali/menit, dan saturasi oksigen 98% pada udara ruangan. Apakah pilihan cairan yang paling tepat untuk diberikan kepada pasien ini?",
    "options": [
      "A. Transfusi darah",
      "B. Cairan isotonik",
      "C. Cairan hipotonik",
      "D. Bikabonat",
      "E. Cairan hipertonik"
    ],
    "answer": 1,
    "rationale": "Pasien mengalami syok hipovolemik akibat dehidrasi berat (TD 80/55 mmHg, nadi 130x/menit) dari muntah dan diare, sehingga resusitasi cairan lini pertama harus menggunakan cairan kristaloid isotonik (seperti Ringer Laktat atau NaCl 0,9%)."
  },
  {
    "id": 32,
    "topic": "Pediatri / Anak",
    "question": "Seorang anak berusia 12 bulan sudah bisa berdiri berpegangan, namun belum bisa berdiri sendiri atau berjalan. Sebelumnya, anak bisa merangkak pada usia 10 bulan, duduk pada usia 7 bulan, dan berguling pada usia 5 bulan. Anak saat ini sudah bisa mengoceh \"mamama\" dan \"dadada\" sejak usia 8 bulan, namun belum spesifik ke orang tertentu. Anak lahir cukup bulan. Pemeriksaan fisik dalam batas normal, status gizi baik. Pemeriksaan penunjang apa yang saat ini diperlukan?",
    "options": [
      "A. Antibodi TORCH",
      "B. Tes IQ",
      "C. MRI kepala",
      "D. Skrining metabolik lengkap",
      "E. Pemeriksaan fungsi pendengaran"
    ],
    "answer": 4,
    "rationale": "Anak usia 12 bulan yang baru bisa mengoceh tidak spesifik (belum memanggil \"mama/papa\" secara spesifik) menunjukkan tanda bahaya (red flag) keterlambatan bicara dan bahasa, sehingga pemeriksaan penunjang pertama yang wajib dilakukan adalah evaluasi fungsi pendengaran."
  },
  {
    "id": 33,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang bayi laki-laki berusia 2 bulan dibawa ke klinik setelah dirujuk oleh dokter umum karena terdengar bising jantung (murmur) saat kunjungan imunisasi. Ibu bayi memiliki riwayat ruam kulit selama kehamilan dan belum pernah menerima vaksin MMR. Pemeriksaan fisik menunjukkan bising kontinyu (continuous murmur) di ruang sela iga kedua parasternal kiri. Jenis kelainan apa yang terdapat pada pasien ini?",
    "options": [
      "A. Defek septal ventrikel (Ventricular septal defect)",
      "B. Duktus arteriosus persisten (Persistent ductus arteriosus)",
      "C. Defek septal atrium (Atrial septal defect)",
      "D. Fistula koroner",
      "E. Foramen ovale paten (Patent foramen ovale)"
    ],
    "answer": 1,
    "rationale": "Temuan bising kontinyu (continuous/machinery-like murmur) di sela iga ke-2 garis parasternal kiri pada bayi dengan riwayat infeksi rubella maternal selama kehamilan merupakan tanda khas Duktus Arteriosus Persisten (Patent Ductus Arteriosus / PDA)."
  },
  {
    "id": 34,
    "topic": "Obstetri & Ginekologi",
    "question": "Seorang wanita berusia 29 tahun datang ke klinik dengan keluhan perdarahan vagina sejak dua jam terakhir. Tes HCG positif. Dokter mencurigai adanya kehamilan ektopik. Untuk mengonfirmasi diagnosis, dokter perlu mengaspirasi darah melalui insisi rektouterina (kuldosentesis). Struktur manakah yang paling dekat dengan rongga tersebut?",
    "options": [
      "A. Forniks lateral kiri vagina",
      "B. Forniks posterior vagina",
      "C. Forniks anterior vagina",
      "D. Portio vaginalis servikis",
      "E. Forniks lateral kanan vagina"
    ],
    "answer": 1,
    "rationale": "Ekskavasio rektouterina (kavum Douglas) terletak tepat di belakang forniks posterior vagina, sehingga prosedur kuldosentesis dilakukan dengan menginsersi jarum melalui forniks posterior vagina."
  },
  {
    "id": 35,
    "topic": "THT-KL",
    "question": "Seorang anak perempuan berusia 7 tahun dibawa ibunya ke klinik THT dengan keluhan benjolan yang muncul di depan tragus telinga kanan. Benjolan berwarna kemerahan, nyeri pada perabaan, dan fluktuatif. Gejala ini berulang kali terjadi, namun membaik setelah pengobatan, menurut ibunya. Terdapat lubang menyerupai fistula pada area superior benjolan kemerahan, yang menurut ibunya sudah ada sejak lahir. Lubang tersebut sering mengeluarkan cairan dan berbau tidak sedap. Apakah terapi yang paling tepat untuk pasien ini?",
    "options": [
      "A. Pemberian antibiotik dan intervensi bedah",
      "B. Aspirasi, insisi, dan drainase",
      "C. Pemberian antibiotik topikal",
      "D. Kompres NaCl dan antibiotik topikal",
      "E. Intervensi bedah"
    ],
    "answer": 0,
    "rationale": "Fistula preaurikular kongenital yang mengalami infeksi berulang dan pembentukan abses memerlukan pemberian antibiotik sistemik untuk mengatasi infeksi akut serta intervensi bedah (insisi drainase abses dan eksisi traktus fistula/fistulektomi definitif) untuk mencegah kekambuhan."
  },
  {
    "id": 36,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang bayi laki-laki berusia 2 bulan dibawa oleh orang tuanya ke poliklinik rawat jalan. Pasien dirujuk oleh dokter umum karena terdengar bising jantung saat kunjungan imunisasi. Ibu bayi memiliki riwayat ruam kulit selama kehamilan dan tidak pernah mendapat imunisasi MMR. Pada pemeriksaan fisik, terdengar bising kontinyu di sela iga ke-2 sepanjang garis parasternal kiri. Apakah diagnosis yang paling tepat pada kasus ini?",
    "options": [
      "A. Fistula koroner",
      "B. Foramen ovale paten",
      "C. Duktus arteriosus paten (Patent ductus arteriosus)",
      "D. Defek septal atrium",
      "E. Defek septal ventrikel"
    ],
    "answer": 2,
    "rationale": "Temuan bising kontinyu (continuous/machinery-like murmur) pada sela iga ke-2 garis parasternal kiri disertai riwayat infeksi rubella maternal saat kehamilan merupakan gambaran klasik Duktus Arteriosus Paten (Patent Ductus Arteriosus / PDA)."
  },
  {
    "id": 37,
    "topic": "Nefrologi & Urologi",
    "question": "Seorang pria berusia 38 tahun datang ke poliklinik umum rawat jalan dengan nyeri saat buang air kecil sejak 2 hari yang lalu. Tidak ada riwayat kencing berdarah atau demam/menggigil. Pada pemeriksaan fisik, ditemukan nyeri tekan suprasimfisis. Hasil urinalisis: keruh, pH 6, berat jenis 1,003, protein negatif, eritrosit 0-2/LPB, leukosit 10-20/LPB, leukosit esterase positif, nitrit negatif. Apakah etiologi paling umum yang ditemukan pada kasus di atas?",
    "options": [
      "A. Acinetobacter",
      "B. Escherichia coli",
      "C. Klebsiella",
      "D. Pseudomonas",
      "E. Enterobacter"
    ],
    "answer": 1,
    "rationale": "Keluhan disuria akut disertai nyeri tekan suprasimfisis, piuria, dan leukosit esterase positif mengarah pada sistitis akut (infeksi saluran kemih bawah), dengan etiologi bakteri tersering adalah Escherichia coli."
  },
  {
    "id": 38,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Seorang ibu datang ke klinik membawa putrinya yang berusia 16 tahun, yang diduga telah melakukan hubungan seksual dengan pacarnya. Pada pemeriksaan fisik tidak ditemukan luka, dan pada pemeriksaan genitalia ditemukan memar serta robekan yang meluas hingga ke dasar selaput dara (himen). Pemeriksaan laboratorium forensik sederhana dari sampel usap vagina menunjukkan tidak ada sperma. Pemeriksaan lanjutan apa yang diperlukan pada kasus ini?",
    "options": [
      "A. Tes Baecchi",
      "B. Tes Fenolftalein",
      "C. Tes Wagenaar",
      "D. Tes kehamilan",
      "E. Tes Florence/Berberio"
    ],
    "answer": 4,
    "rationale": "Apabila pada pemeriksaan usap vagina tidak ditemukan sel spermatozoa, pemeriksaan forensik dilanjutkan dengan mendeteksi keberadaan cairan mani (seminal fluid) menggunakan metode kimiawi yaitu tes Florence (mendeteksi kristal kolin periodida) atau tes Barberio (mendeteksi kristal spermin pikrat)."
  },
  {
    "id": 39,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang bayi perempuan berusia 2 hari didiagnosis dengan Transposisi Pembuluh Darah Besar (Transposition of the Great Arteries / TGA). Jika kondisi ini tidak dikoreksi dalam waktu 4 bulan, akan berakibat fatal. Manakah dari struktur berikut yang harus tetap utuh agar bayi dapat bertahan hidup sampai operasi untuk mengoreksi kelainan dapat dilakukan?",
    "options": [
      "A. Duktus arteriosus",
      "B. Stenosis arteri pulmonalis",
      "C. Duktus venosus",
      "D. Arteri umbilikalis",
      "E. Vena umbilikalis"
    ],
    "answer": 0,
    "rationale": "Pada Transposition of the Great Arteries (TGA), sirkulasi sistemik dan pulmonal berjalan secara paralel sehingga kelangsungan hidup neonatus sebelum operasi korektif sangat bergantung pada pencampuran darah melalui duktus arteriosus yang tetap terbuka (paten)."
  },
  {
    "id": 40,
    "topic": "Mata (Oftalmologi)",
    "question": "Seorang wanita berusia 52 tahun datang ke poliklinik mata dengan keluhan kedua mata terasa kering dan mengganjal sejak 6 bulan yang lalu. Penglihatan tidak dirasakan kabur. Tidak ada mata merah atau gatal. Pasien sudah pernah berobat ke klinik terdekat dan mendapat air mata buatan 4 kali sehari. Pemeriksaan segmen anterior pada kedua mata menunjukkan meniskus air mata < 1 mm, air mata berbusa, kornea jernih, lensa keruh minimal, segmen posterior dalam batas normal. Apakah tatalaksana yang tepat untuk pasien ini?",
    "options": [
      "A. Omega 3 oral sekali sehari",
      "B. Kompres dingin dua kali sehari",
      "C. Tetes mata Sodium hyaluronate 6 kali sehari",
      "D. Salep mata Tetrasiklin 3 kali sehari",
      "E. Tetes mata antibiotik Fluoroquinolone 4 kali sehari"
    ],
    "answer": 2,
    "rationale": "Pasien mengalami sindrom mata kering (dry eye syndrome) derajat sedang dengan meniskus air mata < 1 mm yang belum teratasi dengan tetes air mata buatan 4 kali sehari, sehingga tatalaksana yang tepat adalah meningkatkan frekuensi serta viskositas lubrikan okular menggunakan tetes mata Sodium hyaluronate 6 kali sehari."
  },
  {
    "id": 41,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Tn. MA, 41 tahun, baru saja didiagnosis COVID-19 berdasarkan hasil tes usap RT-PCR terkini. Sebelum menjalani tes diagnostik, Tn. MA mengalami gejala demam, batuk, pilek, dan nyeri tenggorokan selama dua hari terakhir. Tn. MA telah menerima tiga kali vaksinasi COVID-19 dan memiliki riwayat asma, hipertensi, serta diabetes terkontrol. Mengetahui kondisinya, Tn. MA bertanya kepada Anda, dokter yang merawat, mengenai penggunaan obat kumur Povidone Iodine sebagai terapi tambahan untuk mengurangi jumlah virus COVID-19 sehingga mempercepat kesembuhan pasien. Berdasarkan skenario klinis di atas, manakah yang merupakan komponen P (population, patient)?",
    "options": [
      "A. Pasien dewasa dengan gejala infeksi COVID-19 yang berlangsung minimal 2 (dua) hari",
      "B. Pasien dewasa dengan gejala infeksi COVID disertai asma, hipertensi, dan diabetes",
      "C. Pasien dewasa yang didiagnosis COVID yang menerima terapi standar",
      "D. Pasien dewasa yang didiagnosis COVID-19 berdasarkan hasil RT-PCR",
      "E. Pasien dewasa yang didiagnosis COVID yang menggunakan povidone iodine"
    ],
    "answer": 3,
    "rationale": "Dalam penyusunan PICO, komponen P (Patient/Population) harus mendefinisikan karakteristik utama penyakit pasien secara tepat tanpa mencampuradukkan komponen intervensi/pembanding dan tanpa terlalu spesifik memasukkan seluruh komorbiditas yang dapat mempersempit hasil pencarian bukti ilmiah, yaitu pasien dewasa yang didiagnosis COVID-19 berdasarkan hasil RT-PCR."
  },
  {
    "id": 42,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Sebuah kelompok pemuda di Kota A mengadakan kegiatan pengabdian masyarakat berupa lokakarya teknik mencuci tangan yang benar di TK Permata. Acara berlangsung pada hari Kamis pukul 09.00 yang diikuti oleh 25 siswa. Kelompok tersebut menyampaikan materi tentang manfaat cuci tangan, penjelasan jenis-jenis mikroba, dan cara mengidentifikasinya. Pada sesi diskusi tidak ada siswa TK yang bertanya, dan usai lokakarya siswa pulang seperti biasa. Apakah yang mungkin menjadi hambatan komunikasi pada kasus di atas?",
    "options": [
      "A. Praktik yang tidak sesuai (Inappropriate practice)",
      "B. Norma yang tidak sesuai (Inappropriate norms)",
      "C. Kurangnya pengetahuan (Lack of knowledge)",
      "D. Bahasa yang digunakan terlalu rumit/canggih (too sophisticated)",
      "E. Waktu siaran/penyampaian yang tidak tepat (Inappropriate broadcast time)"
    ],
    "answer": 3,
    "rationale": "Penyampaian materi ilmiah mengenai klasifikasi dan identifikasi jenis-jenis mikroba kepada sasaran siswa Taman Kanak-Kanak (TK) tidak sesuai dengan tingkat perkembangan kognitif anak karena menggunakan bahasa dan materi yang terlalu rumit/canggih (too sophisticated)."
  },
  {
    "id": 43,
    "topic": "Mata (Oftalmologi)",
    "question": "Seorang pria berusia 40 tahun datang ke poliklinik rawat jalan rumah sakit dengan keluhan bengkak dan kemerahan pada kelopak mata atas kiri sejak 3 hari yang lalu. Sejak 2 jam yang lalu, ia mengeluhkan keluar nanah dari area tersebut. Keluhan disertai demam dan nyeri. Tidak ada keterbatasan gerak bola mata. Pasien dirawat di rumah sakit, dan hasil CT scan orbita dengan perluasan sinus paranasal tidak menunjukkan abses subperiosteal dan tidak ada sinusitis. Pasien memiliki riwayat sistemik diabetes sejak usia muda. Apakah etiologi paling umum yang menyebabkan kondisi pada kasus ini?",
    "options": [
      "A. Aspergillus fumigatus",
      "B. Propionibacterium acnes",
      "C. Staphylococcus aureus",
      "D. Pseudomonas aeruginosa",
      "E. Candida albicans"
    ],
    "answer": 2,
    "rationale": "Bengkak dan eritema kelopak mata disertai drainase nanah tanpa hambatan gerak bola mata maupun keterlibatan sinus paranasal menunjukkan abses palpebra / selulitis preseptal, yang paling sering disebabkan oleh infeksi bakteri Staphylococcus aureus."
  },
  {
    "id": 44,
    "topic": "Dermatovenerologi",
    "question": "Seorang ibu rumah tangga berusia 28 tahun dibawa oleh keluarganya ke IGD dengan keluhan lepuh di sekujur tubuhnya. Keluarga melaporkan bahwa lepuhan mulai pecah 2 hari yang lalu, setelah mengonsumsi jamu pelangsing seminggu sebelumnya. Pada pemeriksaan fisik ditemukan multipel purpura, bula, dan erosi pada wajah, dada, perut, dan bokong. Pasien tampak lemah, dengan tanda Nikolsky positif. Epidermolisis melibatkan 28% dari luas permukaan tubuh. Dokter segera menginstruksikan agar pasien dirujuk ke fasilitas kesehatan tingkat lanjut. Apa yang harus segera dilakukan sebelum merujuk pasien ini?",
    "options": [
      "A. Melakukan foto Rontgen dada untuk menyingkirkan tuberkulosis sebelum terapi steroid",
      "B. Segera memberikan steroid dosis imunosupresif secara intravena",
      "C. Menilai fungsi hati dan ginjal sebagai indikasi terapi steroid",
      "D. Memastikan pasien stabil secara hemodinamik dengan keseimbangan cairan dan mencegah hipotermia",
      "E. Segera memberikan antibiotik spektrum luas untuk infeksi stafilokokus"
    ],
    "answer": 3,
    "rationale": "Pasien mengalami SJS-TEN overlap / Nekrolisis Epidermal Toksik (epidermolisis 28% luas permukaan tubuh dengan tanda Nikolsky positif) yang berisiko tinggi menimbulkan syok hipovolemik dan gangguan termoregulasi akibat hilangnya sawar kulit, sehingga tindakan darurat utama sebelum merujuk adalah stabilisasi hemodinamik dengan resusitasi cairan dan pencegahan hipotermia."
  },
  {
    "id": 45,
    "topic": "Dermatovenerologi",
    "question": "Seorang anak perempuan berusia 6 tahun dibawa oleh orang tuanya ke puskesmas dengan keluhan kerontokan rambut yang semakin memburuk dalam sebulan terakhir, meninggalkan bercak kebotakan berbentuk bulat di kulit kepala. Kondisi tersebut tidak didahului gatal atau kemerahan. Ibu pasien pernah mengalami keluhan serupa yang membaik tanpa pengobatan. Pada pemeriksaan fisik daerah kulit kepala oksipital ditemukan bercak alopesia berbentuk bulat, tunggal, berbatas tegas, berbentuk seperti koin (numular), dengan permukaan licin. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Grey patch",
      "B. Alopesia areata",
      "C. Dermatitis seboroik",
      "D. Tinea kapitis",
      "E. Black dots"
    ],
    "answer": 1,
    "rationale": "Lesi kebotakan berbentuk bulat/koin (numular) berbatas tegas dengan permukaan kulit kepala yang licin tanpa skuama atau tanda radang, disertai riwayat keluhan serupa pada keluarga yang membaik spontan, merupakan gambaran klasik alopesia areata."
  },
  {
    "id": 46,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Seorang wanita berusia 40 tahun dibawa oleh temannya ke IGD dengan keluhan sulit bernapas dan nyeri tekan dada sejak 2 jam sebelumnya. Nyeri tidak menjalar ke leher atau lengan kiri. Wanita ini menggambarkan keluhannya dengan sangat panik, karena ia takut terkena serangan jantung seperti saudara-saudaranya yang lain. Sejauh ini, wanita tersebut belum pernah mengalami keluhan serupa sebelumnya. Berdasarkan pendekatan penalaran klinis kausal, sistem organ manakah yang tidak relevan dipertimbangkan dalam menegakkan diagnosis banding pada kasus ini?",
    "options": [
      "A. Sistem muskuloskeletal",
      "B. Sistem paru dan respirasi",
      "C. Sistem kardiovaskular",
      "D. Sistem metabolik",
      "E. Sistem gastrointestinal"
    ],
    "answer": 3,
    "rationale": "Keluhan nyeri tekan dada akut disertai sesak napas memiliki kausalitas anatomis dan fisiologis langsung dengan sistem muskuloskeletal (kostokondritis/nyeri dinding dada), respirasi, kardiovaskular, dan gastrointestinal (GERD/spasme esofagus), sedangkan sistem metabolik tidak relevan sebagai penyebab langsung nyeri tekan dada akut."
  },
  {
    "id": 47,
    "topic": "Infeksi Tropis & Imunologi",
    "question": "Seorang pria berusia 35 tahun yang tinggal di Maluku mengalami kencing berwarna putih seperti susu selama sebulan terakhir tanpa demam atau nyeri saat buang air kecil. Ia juga mengalami pembesaran skrotum kanan selama satu tahun terakhir. Apakah infeksi parasit yang paling mungkin pada pasien ini?",
    "options": [
      "A. Schistosoma mansoni",
      "B. Brugia malayi",
      "C. Wuchereria bancrofti",
      "D. Plasmodium falciparum",
      "E. Schistosoma haematobium"
    ],
    "answer": 2,
    "rationale": "Gejala kiluria (urin berwarna putih seperti susu) disertai pembesaran skrotum (hidrokel/limfedema skrotum) akibat obstruksi saluran limfe retroperitoneal dan urogenital merupakan manifestasi khas infeksi parasit Wuchereria bancrofti."
  },
  {
    "id": 48,
    "topic": "Infeksi Tropis & Imunologi",
    "question": "Berdasarkan evolusi, sel dibagi menjadi dua kategori: prokarion dan eukarion. Sel manusia adalah eukarion, sedangkan sel bakteri adalah prokarion. Proses transkripsi pada sel manusia terjadi di dalam inti sel (nukleus), sedangkan pada sel bakteri terjadi di sitoplasma. Manakah yang merupakan tahapan transkripsi pada kedua sel tersebut?",
    "options": [
      "A. Penambahan ekor Poly A pada ujung 3'",
      "B. Restriksi",
      "C. Splicing",
      "D. Penambahan tudung (cap) pada ujung 5'",
      "E. Penempelan RNA polimerase"
    ],
    "answer": 4,
    "rationale": "Baik sel prokariotik maupun eukariotik memulai proses transkripsi dengan penempelan enzim RNA polimerase pada regio promotor DNA, sedangkan penambahan tudung 5' (5' cap), penambahan ekor poly-A 3', dan penyambungan (splicing) hanya terjadi pada modifikasi pascatranskripsi mRNA eukariotik."
  },
  {
    "id": 49,
    "topic": "Pediatri / Anak",
    "question": "Seorang ibu membawa bayi perempuannya, DP, ke puskesmas untuk diimunisasi. Riwayat kelahiran DP: lahir pada usia kehamilan 38 minggu, berat lahir 3000 gram, dan tidak ada riwayat perawatan khusus. Usia saat ini 2 bulan, berat badan 4500 gram, dan tidak ada keluhan. Imunisasi sebelumnya telah diberikan sesuai jadwal. Imunisasi apa yang harus diberikan kepada DP saat ini?",
    "options": [
      "A. DPT-Hepatitis B-HiB 2, dan Polio 3",
      "B. Hepatitis B dan Polio 1",
      "C. BCG dan Polio 1",
      "D. DPT-Hepatitis B-HiB 1, dan Polio 2",
      "E. Hepatitis B"
    ],
    "answer": 3,
    "rationale": "Berdasarkan jadwal imunisasi dasar nasional Kemenkes RI dan IDAI, bayi cukup bulan yang telah mendapatkan imunisasi sebelumnya sesuai jadwal (HB-0 saat lahir serta BCG dan Polio 1 pada usia 1 bulan) harus diberikan imunisasi DPT-HB-HiB 1 dan Polio 2 pada usia 2 bulan."
  },
  {
    "id": 50,
    "topic": "Respirasi & Pulmonologi",
    "question": "Seorang pasien datang ke poliklinik rawat jalan dengan keluhan batuk berdahak bercampur darah sejak 2 minggu yang lalu, disertai penurunan nafsu makan, penurunan berat badan, dan demam. Pasien memiliki riwayat sebagai pengguna narkoba suntik selama 5 tahun. Pemeriksaan fisik: ditemukan ulkus pada daerah orofaring, dan tampak lapisan putih pada lidah pasien. Foto Rontgen dada menunjukkan infiltrat di apeks. Tes dahak: Mtb terdeteksi medium, resistensi rifampisin tidak terdeteksi. Apakah terapi farmakologis yang paling tepat?",
    "options": [
      "A. ARV diberikan minimal selama 2 bulan, kemudian dilanjutkan dengan terapi anti-tuberkulosis (OAT)",
      "B. Terapi anti-tuberkulosis (OAT) diberikan sesegera mungkin",
      "C. Terapi anti-tuberkulosis (OAT) diberikan minimal selama 2 minggu, kemudian dilanjutkan dengan pemberian ARV",
      "D. Terapi anti-tuberkulosis (OAT) diberikan minimal selama 2 bulan, kemudian dilanjutkan dengan pemberian ARV",
      "E. ARV diberikan minimal selama 2 minggu, kemudian dilanjutkan dengan terapi anti-tuberkulosis (OAT)"
    ],
    "answer": 2,
    "rationale": "Sesuai pedoman nasional tatalaksana koinfeksi TB-HIV, pengobatan OAT dimulai terlebih dahulu untuk menekan beban mikobakteria, kemudian diikuti pemberian ARV segera setelah OAT dapat ditoleransi yaitu minimal setelah 2 minggu (dalam 2-8 minggu pertama) guna meminimalkan risiko sindrom pulih imun (IRIS)."
  },
  {
    "id": 51,
    "topic": "Obstetri & Ginekologi",
    "question": "Seorang wanita berusia 32 tahun, G1P0A0, dibawa oleh keluarganya ke puskesmas dengan nyeri perut seperti mau melahirkan. Setelah pembukaan lengkap, pasien dipimpin untuk bersalin. Bayi lahir dengan berat lahir 3.800 gram. Tanda vital menunjukkan pasien sadar, tekanan darah 110/70 mmHg, nadi 92 kali/menit, frekuensi napas 18 kali/menit, suhu 36,4°C. Pemeriksaan fisik abdomen menunjukkan tinggi fundus uteri 2 jari di bawah pusat dan kontraksi baik. Pemeriksaan vulvovaginal menunjukkan laserasi mukosa vagina dan otot perineum, sedangkan sfingter ani dalam batas normal. Apakah diagnosis yang paling tepat pada kasus ini?",
    "options": [
      "A. Ruptur perineum derajat dua",
      "B. Ruptur perineum derajat tiga 3C",
      "C. Ruptur perineum derajat tiga 3B",
      "D. Ruptur perineum derajat tiga 3A",
      "E. Ruptur perineum derajat satu"
    ],
    "answer": 0,
    "rationale": "Robekan jalan lahir pascapersalinan yang melibatkan mukosa vagina dan otot-otot korpus perineum namun tidak mencapai sfingter ani diklasifikasikan sebagai ruptur perineum derajat dua."
  },
  {
    "id": 52,
    "topic": "Obstetri & Ginekologi",
    "question": "Seorang wanita berusia 63 tahun datang ke poliklinik rawat jalan dengan keluhan benjolan di daerah genitalia. Benjolan tersebut sering lecet. Saat tidur, benjolan kadang-kadang masuk sendiri. Riwayat melahirkan pervaginam 5 kali. Tanda vital dalam batas normal. Pada pemeriksaan ginekologi, serviks berdiameter 4 cm menonjol dari dinding anterior vagina saat mengejan. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Sistokel",
      "B. Hernia",
      "C. Kista Gartner",
      "D. Kista Bartholin",
      "E. Prolaps uteri"
    ],
    "answer": 4,
    "rationale": "Turun dan menonjolnya porsio serviks uteri melalui vagina saat pasien mengejan pada wanita lansia dengan faktor risiko multiparitas merupakan tanda diagnostik prolaps uteri."
  },
  {
    "id": 53,
    "topic": "Respirasi & Pulmonologi",
    "question": "Seorang pria berusia 34 tahun datang ke klinik karena batuk berdahak disertai darah. Tes molekuler cepat menunjukkan: M. tb terdeteksi, resistensi rifampisin tidak terdeteksi. Pasien memiliki riwayat penyakit yang sama 5 tahun yang lalu, mendapat pengobatan hanya selama 3 bulan, kemudian berhenti karena merasa sudah sembuh. Pemeriksaan lanjutan apa yang diperlukan pada kasus ini?",
    "options": [
      "A. Uji kepekaan obat untuk obat anti-TB lini pertama",
      "B. Tes serologi M. tb",
      "C. Tes molekuler cepat TB",
      "D. Kultur Mycobacterium tuberculosis",
      "E. Uji kepekaan obat untuk obat anti-TB lini kedua"
    ],
    "answer": 0,
    "rationale": "Pada pasien TB dengan riwayat pengobatan sebelumnya (putus berobat) yang hasil TCM-nya menunjukkan M. tuberculosis sensitif rifampisin, pemeriksaan lanjutan yang diindikasikan sesuai PNPK TB adalah uji kepekaan obat (drug susceptibility testing / LPA) terhadap OAT lini pertama untuk mendeteksi kemungkinan resistensi isoniazid."
  },
  {
    "id": 54,
    "topic": "Respirasi & Pulmonologi",
    "question": "Seorang pria berusia 50 tahun datang ke praktik dokter dengan keluhan sesak napas, sering kali harus berhenti berjalan karena sesak napas yang berbunyi mengi. Pasien tidak memiliki riwayat mengi sebelumnya. Pasien diketahui merokok 20 batang/hari namun sudah mulai mengurangi rokok sejak 1 minggu yang lalu. Pemeriksaan fisik: keadaan umum baik, frekuensi napas 22 kali/menit, denyut nadi 98 kali/menit. Pemeriksaan fisik paru menunjukkan inspeksi dada simetris, suara napas bronkovesikuler pada auskultasi, tidak ada ronkhi di kedua paru, dan terdapat mengi pada kedua paru. Apakah diagnosis yang paling tepat pada kasus ini?",
    "options": [
      "A. Penyakit Paru Obstruktif Kronis (PPOK)",
      "B. Asma bronkial",
      "C. Pneumotoraks",
      "D. Tuberkulosis paru",
      "E. Pneumonia"
    ],
    "answer": 0,
    "rationale": "Sesak napas saat aktivitas disertai mengi bilateral yang baru muncul pada usia 50 tahun tanpa riwayat atopi/asma sebelumnya, dengan faktor risiko perokok aktif berat (20 batang/hari), mengarah pada diagnosis Penyakit Paru Obstruktif Kronis (PPOK)."
  },
  {
    "id": 55,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Seorang pasien laki-laki berusia 65 tahun datang dengan keluhan pilek, hidung tersumbat, dan sakit kepala. Keluhan ini bersifat hilang timbul selama sebulan terakhir. Evaluasi mengonfirmasi bahwa pasien menderita rinosinusitis yang disebabkan oleh infeksi jamur Aspergillus sp. Berdasarkan pilihan pengobatan yang ada, Anda merekomendasikan pembedahan untuk mengatasi kondisi ini, yang diketahui memiliki tingkat kesembuhan lebih baik daripada alternatif regimen antijamur jangka panjang. Pasien dan keluarga menyetujui pembedahan, namun mereka menanyakan potensi komplikasi, mengingat faktor usia pasien yang sudah lanjut, beberapa kondisi medis yang menyertai, dan jenis jamur invasif tersebut. Pertanyaan klinis yang tepat berdasarkan skenario di atas adalah:",
    "options": [
      "A. Etiologi/Bahaya (Etiology/Harm)",
      "B. Diagnosis",
      "C. Prevalensi",
      "D. Prognosis",
      "E. Intervensi"
    ],
    "answer": 3,
    "rationale": "Pertanyaan pasien dan keluarga mengenai potensi komplikasi serta perjalanan luaran klinis pascaoperasi berdasarkan karakteristik risiko pasien (usia lanjut, komorbiditas, dan infeksi jamur invasif) merupakan domain pertanyaan klinis Prognosis."
  },
  {
    "id": 56,
    "topic": "Mata (Oftalmologi)",
    "question": "Seorang pria berusia 37 tahun datang dengan keluhan penglihatan kabur mendadak pada mata kanan sejak 1 minggu yang lalu. Penglihatan kabur digambarkan seperti ada tirai yang menutupi pandangannya. Ia menyangkal adanya mata merah dan riwayat trauma. Sebelum timbulnya penglihatan kabur, pasien melaporkan melihat kilatan cahaya (flashes) dan bintik-bintik hitam melayang (floaters). Ia memiliki riwayat miopia tinggi pada kedua mata (OD -10 dan OS -8) dan rutin menggunakan kacamata. Ia menyangkal riwayat diabetes melitus atau hipertensi. Pemeriksaan klinis/penunjang apa yang dapat dilakukan untuk menegakkan diagnosis pada pasien ini?",
    "options": [
      "A. Biomikroskopi slit-lamp",
      "B. Pemeriksaan funduskopi dengan midriatikum",
      "C. OCT makula",
      "D. Angiografi fluoresens fundus",
      "E. CT scan"
    ],
    "answer": 1,
    "rationale": "Penurunan visus mendadak pada mata tenang menyerupai tirai yang menutupi pandangan, didahului fotopsia (flashes) dan floaters pada penderita miopia tinggi merupakan trias klasik ablasio retina regmatogenosa, yang ditegakkan melalui pemeriksaan funduskopi dengan pemberian midriatikum."
  },
  {
    "id": 57,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang bayi perempuan berusia 2 hari didiagnosis dengan Transposisi Pembuluh Darah Besar (Transposition of the Great Arteries / TGA). Jika kondisi ini tidak dikoreksi dalam waktu 4 bulan, akan berakibat fatal. Manakah dari struktur berikut yang harus tetap utuh agar bayi dapat bertahan hidup sampai operasi untuk mengoreksi kelainan dapat dilakukan?",
    "options": [
      "A. Duktus arteriosus",
      "B. Stenosis arteri pulmonalis",
      "C. Vena umbilikalis",
      "D. Duktus venosus",
      "E. Arteri umbilikalis"
    ],
    "answer": 0,
    "rationale": "Pada Transposition of the Great Arteries (TGA), sirkulasi sistemik dan pulmonal terpisah secara paralel sehingga duktus arteriosus harus dipertahankan tetap terbuka (paten) agar darah teroksigenasi dari sirkulasi paru dapat bercampur ke sirkulasi sistemik hingga tindakan bedah dilakukan."
  },
  {
    "id": 58,
    "topic": "Mata (Oftalmologi)",
    "question": "Seorang pria berusia 65 tahun datang dengan keluhan penglihatan kabur pada mata kiri dan tidak dapat melihat sama sekali sejak 2 bulan yang lalu. Sejak 6 bulan yang lalu, penglihatan pada kedua mata terasa kabur dan bertahap memburuk. Tidak ada keluhan mata merah. Pasien adalah seorang juru parkir yang selalu bekerja di luar ruangan tanpa menggunakan kacamata pelindung atau topi. Pasien belum pernah memeriksa gula darah atau tekanan darah sebelumnya. Pemeriksaan menunjukkan visus OD 3/60 S -2.00 6/45 ph tidak membaik dan OS 1/300. TIO OD 19 mmHg dan OS 20 mmHg. Kedalaman bilik mata depan kedua mata dalam. Lensa OD keruh, shadow test (+), lensa OS keruh, shadow test (-). Fundus OD: papil saraf optik bulat dengan batas tegas, CDR 0,3-0,4, aa/vv 2/3, refleks makula (+), retina tanpa eksudat dan tanpa perdarahan. Fundus OS sulit dinilai. Apakah tatalaksana yang tepat untuk pasien ini?",
    "options": [
      "A. Trabekulektomi",
      "B. Regulasi gula darah",
      "C. Obat Timolol 0,5% dua kali sehari pada kedua mata",
      "D. Fakoemulsifikasi",
      "E. Koreksi kacamata"
    ],
    "answer": 3,
    "rationale": "Pasien menderita katarak senilis imatur OD (shadow test positif) dan katarak senilis matur OS (visus 1/300, shadow test negatif) dengan TIO dan segmen posterior normal, sehingga tatalaksana definitif yang tepat untuk memulihkan tajam penglihatan adalah ekstraksi katarak dengan teknik fakoemulsifikasi."
  },
  {
    "id": 59,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang pria berusia 65 tahun datang dengan keluhan utama nyeri dada hebat, terutama saat beraktivitas. Nyeri mereda saat pasien beristirahat. Setelah mengevaluasi dan mempertimbangkan berbagai terapi, dokter memutuskan untuk meresepkan nitroglisering. Manakah dari efek samping berikut yang paling mungkin terjadi dengan obat ini, dan apa mekanismenya?",
    "options": [
      "A. Pusing akibat penurunan kontraktilitas jantung",
      "B. Sakit kepala akibat vasodilatasi",
      "C. Apnea akibat vasodilatasi kranial",
      "D. Hipertensi akibat takikardia refleks",
      "E. Diuresis akibat aktivasi simpatis"
    ],
    "answer": 1,
    "rationale": "Nitrogliserin bekerja melepaskan nitrit oksida (NO) yang menginduksi relaksasi otot polos pembuluh darah.\nEfek samping yang paling sering dikeluhkan pasien adalah sakit kepala akibat vasodilatasi pembuluh darah meningeal/serebral."
  },
  {
    "id": 60,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Jasad seorang pria berusia 78 tahun ditemukan tidak bernyawa dalam posisi telungkup di dekat meja makan sebuah panti jompo. Penyidik membawa jenazah ke rumah sakit untuk diperiksa. Pada pemeriksaan, ditemukan buah anggur pada daerah laringofaring. Tidak ditemukan tanda-tanda kekerasan lainnya. Apakah penyebab kematian yang paling mungkin pada kasus ini?",
    "options": [
      "A. Smothering",
      "B. Suffocation",
      "C. Tersedak (Choking)",
      "D. Strangulation",
      "E. Gagging"
    ],
    "answer": 2,
    "rationale": "Kematian akibat asfiksia mekanik yang disebabkan oleh sumbatan benda asing di dalam lumen saluran napas bagian dalam (laringofaring/trakeobronkial), seperti makanan utuh (buah anggur), disebut sebagai tersedak (choking)."
  },
  {
    "id": 61,
    "topic": "Endokrin & Metabolik",
    "question": "Seorang wanita berusia 35 tahun datang dengan keluhan utama berat badan meningkat dalam tiga bulan terakhir. Asupan makanannya meningkat karena rasa laparnya meningkat. Pipinya menjadi tembam, dan timbul kerutan keunguan seperti selulit pada perut dan bokongnya. Pada pemeriksaan fisik, ia tampak sakit ringan dan berpenampilan compos mentis. Tekanan darahnya 140/90 mmHg, denyut nadinya 80 kali/menit, dan suhunya 36.8°C Tinggi/berat badannya adalah 160 cm/85 kg. Manakah dari enzim berikut yang teraktivasi pada kondisi pasien ini?",
    "options": [
      "A. Piruvat kinase",
      "B. Laktat dehidrogenase",
      "C. Glukosa 6-fosfatase",
      "D. Heksokinase",
      "E. Fosfofruktokinase-1"
    ],
    "answer": 2,
    "rationale": "Gambaran klinis obesitas sentral, pipi tembam (moon face), striae keunguan (striae lividae), dan hipertensi mengarah pada sindrom Cushing (hiperkortisolisme).\nHormon kortisol meningkatkan kadar glukosa darah dengan mengaktivasi enzim-enzim glukoneogenesis di hati, termasuk enzim glukosa-6-fosfatase."
  },
  {
    "id": 62,
    "topic": "THT-KL",
    "question": "Seorang wanita berusia 24 tahun datang ke dokter dengan keluhan keluar cairan dari telinga kirinya selama dua hari terakhir. Cairan tersebut hilang timbul, terutama saat ia sedang pilek. Ia pernah mengalami keluhan yang sama lima tahun yang lalu. Pemeriksaan otoskopi menunjukkan cairan kental dari liang telinga kiri dan perforasi sentral pada membran timpani. Telinga kanan normal. Pendengaran pada telinga kiri sedikit terganggu. Apakah diagnosanya?",
    "options": [
      "A. Otitis media supuratif kronis tipe benigna aurikula kiri",
      "B. Otitis media dengan efusi aurikula kiri",
      "C. Otitis media akut aurikula kiri",
      "D. Otitis media supuratif kronis tipe maligna aurikula kiri",
      "E. Otitis eksterna aurikula kiri"
    ],
    "answer": 0,
    "rationale": "Keluarnya sekret telinga tengah secara kronis/berulang disertai perforasi membran timpani di daerah sentral (pars tensa) tanpa adanya kolesteatoma menunjukkan diagnosis Otitis Media Supuratif Kronis (OMSK) tipe aman/benigna aurikula kiri."
  },
  {
    "id": 63,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang pria berusia 68 tahun dibawa ke IGD rumah sakit. Saat tiba, pasien sudah meninggal dunia. Menurut informasi dari keluarga, pasien sempat mengeluhkan nyeri dada yang digambarkan tajam, seperti diiris, menjalar ke punggung. Tak lama kemudian, pasien kehilangan kesadaran. Ia memiliki riwayat hipertensi dan penyakit jantung koroner. Pada pemeriksaan fisik, konjungtiva dan kulit di bawah kuku tampak pucat. Apakah penyebab kematian yang paling mungkin pada kasus ini?",
    "options": [
      "A. Infark miokard akut",
      "B. Penyakit katup jantung",
      "C. Penyakit jantung reumatik",
      "D. Disseksi aorta",
      "E. Miokarditis"
    ],
    "answer": 3,
    "rationale": "Nyeri dada hebat mendadak seperti diiris/dirobek yang menjalar ke punggung pada penderita hipertensi diikuti sinkop dan tanda perdarahan internal masif (pucat pada konjungtiva dan bantalan kuku) merupakan manifestasi klasik ruptur dan diseksi aorta akut."
  },
  {
    "id": 64,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Seorang pasien laki-laki berusia 65 tahun datang dengan keluhan pilek, hidung tersumbat, dan sakit kepala. Keluhan ini bersifat hilang timbul selama sebulan terakhir. Evaluasi mengonfirmasi bahwa pasien menderita rinosinusitis yang disebabkan oleh infeksi jamur Aspergillus sp. Berdasarkan pilihan pengobatan yang ada, Anda merekomendasikan pembedahan untuk mengatasi kondisi ini, yang diketahui memiliki tingkat kesembuhan lebih baik daripada alternatif regimen antijamur jangka panjang. Pasien dan keluarga menyetujui pembedahan, namun mereka menanyakan potensi komplikasi, mengingat faktor usia pasien yang sudah lanjut, beberapa kondisi medis yang menyertai, dan jenis jamur invasif tersebut. Berdasarkan skenario klinis di atas, manakah yang merupakan komponen P (population, patient)?",
    "options": [
      "A. Pasien dengan rinosinusitis jamur pascaoperasi",
      "B. Pasien dengan rinosinusitis jamur pascaoperasi yang mengalami komplikasi",
      "C. Pasien dengan hidung tersumbat dan sakit kepala",
      "D. Pasien lansia dengan rinosinusitis jamur",
      "E. Pasien lansia dengan komorbiditas multiple"
    ],
    "answer": 3,
    "rationale": "Dalam struktur PICO pada skenario tersebut, komponen P (Patient/Population) yang paling tepat merepresentasikan populasi klinis dan masalah utama pasien sebelum intervensi dan luaran terjadi adalah pasien lansia dengan rinosinusitis jamur."
  },
  {
    "id": 65,
    "topic": "Infeksi Tropis & Imunologi",
    "question": "Seorang pria berusia 26 tahun yang tinggal di Bekasi mengalami demam berulang dan pembesaran skrotum selama tiga tahun terakhir. Baru-baru ini, ia mengeluhkan mengeluarkan urin berwarna putih seperti susu. Berdasarkan informasi ini, pasien mungkin menderita:",
    "options": [
      "A. Filariasis Brugia",
      "B. Filariasis Malayi aperiodik",
      "C. Filariasis Malayi periodik",
      "D. Filariasis Bancrofti",
      "E. Filariasis Timori"
    ],
    "answer": 3,
    "rationale": "Keterlibatan pembuluh limfe traktus urogenital yang menyebabkan hidrokel/pembesaran skrotum dan kiluria (urin putih seperti susu) merupakan tanda khas infeksi Wuchereria bancrofti (Filariasis Bancrofti), berbeda dengan spesies Brugia yang umumnya hanya mengenai ekstremitas di bawah lutut/siku."
  },
  {
    "id": 66,
    "topic": "Psikiatri",
    "question": "Seorang pria berusia 40 tahun dirawat di RSUD karena pneumonia. Ia masih mengalami demam, dan responnya terhadap antibiotik belum dievaluasi. Pada hari ketiga perawatan, pasien menjadi gelisah, mudah marah, dan memaksa untuk pulang. Sejak pagi ini, ia juga tampak bingung dan tidak mengenali dokter yang merawatnya. Pasien melaporkan melihat bayangan hitam di depan tempat tidurnya. Menurut perawat, semalam pasien masih kooperatif dan tenang saat berkomunikasi. Rekam medis menunjukkan bahwa pasien tidak memiliki riwayat penyakit berat atau cedera kepala sebelumnya. Ia kadang-kadang merokok dan minum alkohol. Tidak ada riwayat gangguan jiwa sebelumnya. Pada pemeriksaan, pasien kesulitan merespons pemeriksa, tidak dapat menjawab pertanyaan, serta mengalami gangguan perhatian dan konsentrasi. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Intoksikasi obat",
      "B. Delirium",
      "C. Psikosis akut",
      "D. Gangguan konversi",
      "E. Reaksi stres akut"
    ],
    "answer": 1,
    "rationale": "Perubahan kesadaran, disorientasi, halusinasi visual, serta gangguan pemusatan perhatian dan konsentrasi yang muncul secara akut dan berfluktuasi pada pasien dengan infeksi sistemik akut (pneumonia) merupakan kriteria diagnostik delirium."
  },
  {
    "id": 67,
    "topic": "Endokrin & Metabolik",
    "question": "Seorang wanita berusia 57 tahun dirawat di rumah sakit dengan keluhan lemas dan penurunan kesadaran. Menurut keluarganya, pasien menderita diabetes melitus dan kadar gula darahnya tidak terkontrol baik dengan obat oral. Dokter memesan pemeriksaan laboratorium, dan hasil analisis gas darah menunjukkan pH 7,25, pCO2 29 mmHg, dan HCO3 14 mmol/L. Kelainan elektrolit manakah yang mungkin ditemukan pada pasien dengan gangguan asam-basa ini?",
    "options": [
      "A. Hipokalemia",
      "B. Hiperkalemia",
      "C. Hipokloremia",
      "D. Hiperkloremia",
      "E. Hiperkalsemia"
    ],
    "answer": 1,
    "rationale": "Analisis gas darah menunjukkan asidosis metabolik terkompensasi sebagian akibat komplikasi akut diabetes melitus (ketoasidosis diabetikum).\nKondisi asidemia ekstraseluler dan defisiensi insulin memicu perpindahan ion kalium dari intrasel ke ekstrasel (transcellular shift) sehingga menyebabkan hiperkalemia."
  },
  {
    "id": 68,
    "topic": "Infeksi Tropis & Imunologi",
    "question": "Seorang pria berusia 47 tahun datang ke poliklinik rawat jalan dengan keluhan lemas yang semakin memburuk sejak 1 bulan yang lalu. Pasien mengeluhkan ketidaknyamanan pada perut, kembung, dan sering buang angin sejak 6 bulan yang lalu. Pasien bekerja sebagai petani dan tidak pernah menggunakan alas kaki. Pemeriksaan fisik: compos mentis, tekanan darah 130/80 mmHg, nadi 98 kali/menit, tidak demam, frekuensi napas 18 kali/menit. Konjungtiva tampak pucat. Pemeriksaan penunjang: Hb 5,6 g/dL, hitung jenis leukosit menunjukkan peningkatan eosinofil, saturasi transferin 15%. Jenis anemia apa yang paling mungkin ditemukan pada pasien ini?",
    "options": [
      "A. Anemia mikrositik hipokromik",
      "B. Anemia normositik normokromik",
      "C. Anemia normositik hiperkromik",
      "D. Anemia makrositik hipokromik",
      "E. Anemia makrositik hiperkromik"
    ],
    "answer": 0,
    "rationale": "Infestasi cacing tambang kronis pada petani yang tidak memakai alas kaki (ditandai eosinofilia dan gejala saluran cerna) menyebabkan kehilangan darah okulta kronis dan defisiensi besi (saturasi transferin 15%), yang memberikan gambaran morfologi eritrosit berupa anemia mikrositik hipokromik."
  },
  {
    "id": 69,
    "topic": "Obstetri & Ginekologi",
    "question": "Seorang wanita berusia 23 tahun pada usia kehamilan 16 minggu datang ke IGD dengan perdarahan vagina. Perdarahan disertai dengan keluarnya jaringan. Pada pemeriksaan, ostium uteri internum dan eksternum terbuka. USG menunjukkan sisa jaringan di dalam uterus. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Abortus habitualis",
      "B. Abortus insipiens",
      "C. Abortus imminens",
      "D. Abortus komplit",
      "E. Abortus inkomplit"
    ],
    "answer": 4,
    "rationale": "Perdarahan pervaginam pada usia kehamilan kurang dari 20 minggu yang disertai keluarnya sebagian jaringan hasil konsepsi, ostium uteri terbuka, dan temuan sisa jaringan intrauterin pada USG menegakkan diagnosis abortus inkomplit."
  },
  {
    "id": 70,
    "topic": "THT-KL",
    "question": "Seorang pria berusia 28 tahun datang ke puskesmas dengan keluhan hidung tersumbat selama seminggu terakhir, yang memburuk dengan penggunaan tetes hidung. Pasien memiliki riwayat bersin-bersin dan hidung tersumbat berulang hampir setiap pagi sejak lama. Gejala ini sangat mengganggu, sehingga ia sering menggunakan tetes hidung yang dibeli dari apotek. Pasien menyatakan bahwa ia alergi terhadap udara dingin dan debu sejak SMP. Pemeriksaan THT dilakukan pada pasien ini. Apakah temuan khas yang paling mungkin pada kasus ini?",
    "options": [
      "A. Sekret purulen di meatus medius dengan polip di rongga hidung kanan",
      "B. Deviasi septum bilateral",
      "C. Hipertrofi dan konka inferior pucat (livid), dengan sekret hidung serosa",
      "D. Atrofi konka inferior dengan warna kebiruan (livid)",
      "E. Edema dan hiperemia konka inferior, dengan sekret hidung purulen"
    ],
    "answer": 2,
    "rationale": "Riwayat atopi terhadap debu dan udara dingin sejak SMP dengan gejala bersin berulang setiap pagi merupakan manifestasi rinitis alergi yang secara klasik menunjukkan temuan rinoskopi anterior berupa hipertrofi/edema konka inferior berwarna pucat atau kebiruan (livid) disertai sekret hidung serosa."
  },
  {
    "id": 71,
    "topic": "Respirasi & Pulmonologi",
    "question": "Seorang pria berusia 33 tahun datang ke poliklinik rawat jalan dengan keluhan nyeri pada dada kanan sejak 2 minggu yang lalu. Nyeri dirasakan hampir terus-menerus. Sesak napas terjadi sesekali saat beraktivitas berat atau batuk. Pasien juga mengeluhkan batuk berdahak yang sulit dikeluarkan. Tidak ada demam. Nafsu makan menurun. Tidak ada mual/muntah. Pemeriksaan fisik: tampak sakit ringan, sadar penuh, denyut nadi 86 kali/menit, frekuensi napas 22 kali/menit, SpO2 95% pada udara ruangan, dada asimetris, dengan pergerakan tertinggal di sebelah kanan, fremitus menurun di sebelah kanan, perkusi redup di sebelah kanan, batas jantung kanan sulit dinilai, dan batas jantung kiri berada di garis aksilaris anterior. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Efusi pleura kanan",
      "B. Tumor paru kanan",
      "C. Atelektasis paru kanan",
      "D. Destroyed lung kanan",
      "E. Pneumotoraks spontan kanan"
    ],
    "answer": 0,
    "rationale": "Gerak hemitoraks kanan yang tertinggal, penurunan fremitus taktil, perkusi redup pada dada kanan, serta pendorongan mediastinum ke arah kontralateral (batas jantung kiri bergeser hingga garis aksilaris anterior) merupakan tanda fisik klasik efusi pleura kanan masif."
  },
  {
    "id": 72,
    "topic": "Neurologi",
    "question": "Seorang anak laki-laki dibawa ke ruang gawat darurat oleh gurunya setelah kehilangan kesadaran akibat terpukul di kepala sebelah kiri dengan pemukul bisbol. Empat jam kemudian, selama observasi, ia mengeluhkan sakit kepala hebat dan kejang. Temuan pemeriksaan fisik meliputi pupil kiri melebar (dilatasi) dan penurunan respons terhadap cahaya. Dokter mencurigai adanya peningkatan tekanan intrakranial. Manakah penyebab yang paling mungkin pada pasien ini?",
    "options": [
      "A. Perdarahan subdural",
      "B. Perdarahan subaraknoid",
      "C. Perdarahan intraventrikular",
      "D. Perdarahan intraserebral",
      "E. Perdarahan epidural"
    ],
    "answer": 4,
    "rationale": "Adanya fenomena lucid interval (kehilangan kesadaran sesaat pascatrauma tumpul kepala, diikuti periode sadar selama beberapa jam sebelum mengalami perburukan neurologis cepat berupa nyeri kepala hebat, kejang, dan dilatasi pupil ipsilateral akibat herniasi unkal) merupakan gambaran klasik perdarahan epidural (epidural hematoma) karena ruptur arteri meningea media."
  },
  {
    "id": 73,
    "topic": "Muskuloskeletal & Bedah",
    "question": "Seorang wanita berusia 35 tahun datang ke IGD dengan nyeri pada bahu kanan sejak 1 jam yang lalu. Pasien memiliki riwayat jatuh saat mengendarai sepeda motor, dengan bahu menyentuh aspal terlebih dahulu. Pemeriksaan fisik menemukan square sign dan keterbatasan gerak sendi yang disertai nyeri. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Subluksasi bahu",
      "B. Fraktur humerus proksimal",
      "C. Dislokasi bahu anterior",
      "D. Dislokasi bahu posterior",
      "E. Spasme bahu"
    ],
    "answer": 2,
    "rationale": "Hilangnya kontur membulat normal muskulus deltoideus sehingga bahu tampak menyiku/kotak (square shoulder sign / epaulette sign) disertai keterbatasan rentang gerak sendi pascatrauma merupakan tanda klinis khas dislokasi bahu (glenohumeral) anterior."
  },
  {
    "id": 74,
    "topic": "Dermatovenerologi",
    "question": "Seorang wanita berusia 50 tahun datang ke poliklinik rawat jalan dengan keluhan kemerahan dan gatal di lipatan ketiak selama seminggu terakhir. Beberapa hari sebelumnya, ia menggunakan bedak yang mengandung mentol untuk mengurangi keringat. Berat badannya 80 kg dengan indeks massa tubuh 31,5. Terdapat lesi plak eritematosa, berbentuk seperti koin, berbatas tegas, dengan permukaan basah dan beberapa sisik di kedua daerah ketiak. Di sekitar lesi terdapat multipel papul eritematosa kecil (berukuran milier). Pasien menderita diabetes melitus dan sudah lama tidak mendapat pengobatan. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Dermatitis kontak iritan",
      "B. Eritrasma",
      "C. Pitiriasis rosea",
      "D. Tinea korporis",
      "E. Kandidiasis kutis"
    ],
    "answer": 4,
    "rationale": "Plak eritematosa berbatas tegas dengan permukaan basah/maserasi pada area lipatan kulit (intertriginosa) yang dikelilingi oleh lesi satelit berupa papul-papul eritematosa milier pada pasien dengan faktor predisposisi obesitas dan diabetes melitus tidak terkontrol merupakan gambaran khas kandidiasis kutis intertriginosa."
  },
  {
    "id": 75,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Seorang pria berusia sekitar 50 tahun ditemukan meninggal di dalam kamar dalam posisi telungkup di lantai, di samping tempat tidur. Pada pemeriksaan fisik ditemukan luka lecet pada dahi, dikelilingi memar berwarna kebiruan kemerahan. Apakah penyebab luka pada dahi yang harus dituliskan pada bagian kesimpulan visum et repertum?",
    "options": [
      "A. Kekerasan tumpul (Impact by a blunt object)",
      "B. Benturan kepala pada tepi tempat tidur",
      "C. Benturan kepala pada lantai",
      "D. Trauma tumpul (Blunt force trauma)",
      "E. Pukulan dari benda tumpul"
    ],
    "answer": 0,
    "rationale": "Dalam bagian Kesimpulan Visum et Repertum (VeR), dokter merumuskan jenis kualifikasi kekerasan penyebab luka secara objektif, yakni akibat kekerasan tumpul (luka lecet dan memar), tanpa menyimpulkan benda spesifik atau cara kejadian seperti terpukul maupun terbentur lantai."
  },
  {
    "id": 76,
    "topic": "THT-KL",
    "question": "Seorang pria berusia 35 tahun datang ke dokter dengan keluhan nyeri pipi selama 2 minggu terakhir. Ia juga melaporkan mengalami pilek dengan sekret hidung berwarna kuning-hijau berbau busuk dan nyeri di daerah infraorbita. Pasien sebelumnya mengalami sakit gigi dan gusi bengkak. Pada pemeriksaan fisik ditemukan sekret berwarna kuning-hijau dari meatus medius rongga hidung kanan disertai postnasal drip. Apakah tatalaksana awal yang tepat untuk kasus ini?",
    "options": [
      "A. Antibiotik spektrum luas",
      "B. Irigasi hidung dengan NaCl dan kortikosteroid intranasal",
      "C. Nasoendoskopi",
      "D. CT scan sinus paranasal",
      "E. Kortikosteroid intranasal dan oral"
    ],
    "answer": 1,
    "rationale": "Pasien mengalami rinosinusitis akut maksilaris (dengan kecurigaan fokus odontogenik).\nSesuai pedoman EPOS, tatalaksana medis awal lini pertama untuk mengurangi edema mukosa Kompleks Osteomeatal (KOM) dan memperbaiki bersihan mukosiliar adalah irigasi hidung dengan larutan salin (NaCl) dan pemberian kortikosteroid intranasal."
  },
  {
    "id": 77,
    "topic": "Dermatovenerologi",
    "question": "Seorang pria berusia 32 tahun datang ke puskesmas dengan keluhan ulkus genitalia yang tidak nyeri. Pemeriksaan klinis dan laboratorium menunjukkan ulkus berindurasi, dengan tes VDRL dan TPHA reaktif. Pasien mengaku rutin melakukan hubungan seksual dengan banyak pasangan wanita. Rekomendasi apa yang harus diberikan untuk mencegah penularan ke pasangannya?",
    "options": [
      "A. Pengamatan serologis rutin pada pasangan setiap 3 bulan selama 1 tahun",
      "B. Pengobatan presumtif hanya jika pasangan reaktif secara serologis",
      "C. Pengobatan presumtif untuk semua pasangan dalam 90 hari terakhir",
      "D. Pengobatan definitif hanya untuk pasangan yang bersedia diperiksa",
      "E. Obati pasangan sama seperti pasien tanpa memandang hasil serologi"
    ],
    "answer": 2,
    "rationale": "Berdasarkan pedoman tatalaksana Infeksi Menular Seksual (IMS) pada kasus sifilis stadium primer (ulkus durum dengan VDRL dan TPHA reaktif), seluruh pasangan seksual pasien dalam 90 hari terakhir harus diberikan pengobatan presumtif seperti sifilis stadium dini meskipun hasil tes serologis pasangan masih negatif karena kemungkinan berada dalam masa inkubasi/jendela."
  },
  {
    "id": 78,
    "topic": "Pediatri / Anak",
    "question": "Seorang anak laki-laki berusia 4 tahun datang ke Puskesmas dengan vesikel yang muncul 2 hari yang lalu setelah demam dan ruam kulit selama 3 hari. Pada pemeriksaan fisik, pasien demam. Papul, vesikel, dan krusta ditemukan terutama di badan, serta di wajah, ekstremitas, mukosa bukal, dan faring. Apakah etiologi penyakit pada kasus di atas?",
    "options": [
      "A. Virus Campak (Measles virus)",
      "B. Virus Varicella zoster",
      "C. Virus Herpes simplex tipe 1",
      "D. Virus Herpes simplex tipe 2",
      "E. Poxvirus"
    ],
    "answer": 1,
    "rationale": "Lesi kulit polimorfik (papul, vesikel, dan krusta yang muncul bersamaan) dengan pola penyebaran sentrifugal yang dominan di badan kemudian menyebar ke wajah, ekstremitas, dan mukosa mulut pascademam prodromal merupakan manifestasi klasik varisela (cacar air) yang disebabkan oleh Virus Varicella zoster."
  },
  {
    "id": 79,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang pasien laki-laki berusia 45 tahun datang dengan nyeri dada saat beraktivitas yang hilang dengan istirahat. Pemeriksaan fisik normal, namun EKG menunjukkan depresi segmen ST selama tes beban latih (exercise test). Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Infark miokard akut",
      "B. Angina stabil",
      "C. Penyakit jantung reumatik",
      "D. Angina Prinzmetal",
      "E. Sindrom Brugada"
    ],
    "answer": 1,
    "rationale": "Nyeri dada yang dipicu oleh aktivitas fisik dan membaik dengan istirahat disertai temuan iskemia miokard terinduksi aktivitas berupa depresi segmen ST pada uji beban latih (exercise stress test) menegakkan diagnosis angina pektoris stabil."
  },
  {
    "id": 80,
    "topic": "Respirasi & Pulmonologi",
    "question": "Seorang wanita berusia 30 tahun datang ke IGD rumah sakit dengan keluhan sesak napas yang kadang disertai suara mengi sejak 1 minggu yang lalu, disertai berdebar-debar. Pasien diketahui sering mengalami batuk pilek disertai sesak napas dan mengi pada masa kanak-kanak, namun sejak SMP tidak ada keluhan lagi. Pada pemeriksaan fisik, keadaan umum gelisah, frekuensi napas 26 kali/menit. Pada auskultasi paru terdengar mengi. Apakah diagnosis yang paling tepat pada kasus ini?",
    "options": [
      "A. Tuberkulosis paru",
      "B. Pneumonia",
      "C. Pneumotoraks",
      "D. Asma bronkial",
      "E. Rinitis alergi"
    ],
    "answer": 3,
    "rationale": "Sesak napas episodik disertai bunyi mengi (wheezing) ekspiratoar pada pemeriksaan auskultasi paru dengan riwayat serangan serupa pada masa kanak-kanak merupakan gambaran khas eksaserbasi asma bronkial."
  },
  {
    "id": 81,
    "topic": "Respirasi & Pulmonologi",
    "question": "Seorang pria berusia 55 tahun datang ke poliklinik rawat jalan rumah sakit dengan keluhan batuk sejak 2 minggu yang lalu. Kadang-kadang ia mengeluarkan dahak yang sulit dikeluarkan, namun lebih sering batuk kering. Batuk dirasakan terus-menerus. Tidak ada sesak napas, dan demam tidak tinggi. Pasien tidak merasakan adanya penurunan berat badan. Nafsu makannya baik. Pasien merokok sekitar 5-10 batang per hari selama 35 tahun. Tidak ada riwayat asma. Pasien memiliki riwayat TB paru 30 tahun yang lalu dan telah dinyatakan sembuh. Pada pemeriksaan fisik tampak sakit ringan, sadar penuh, tekanan darah 120/80 mmHg, denyut nadi 84 kali/menit, frekuensi napas 20 kali/menit, suhu 37,6°C. Auskultasi menunjukkan suara napas vesikuler bilateral, dengan ronkhi kering minimal. Apakah terapi farmakologis yang paling tepat?",
    "options": [
      "A. Antitusif",
      "B. Parasetamol",
      "C. Kortikosteroid",
      "D. Mukolitik",
      "E. Bronkodilator"
    ],
    "answer": 3,
    "rationale": "Keluhan batuk dengan dahak kental yang sulit dikeluarkan disertai temuan ronkhi kering minimal pada auskultasi paru membutuhkan terapi mukolitik untuk memecah ikatan mukopolisakarida sputum sehingga dahak lebih encer dan mudah diekspektorasikan."
  },
  {
    "id": 82,
    "topic": "Infeksi Tropis & Imunologi",
    "question": "Seorang pasien yang dibawa ke IGD akan diberikan antibiotik intravena. Dokter terlebih dahulu akan melakukan tes kulit (skin test) untuk menyingkirkan anafilaksis. Mekanisme imun apa yang mendasari reaksi klinis ini?",
    "options": [
      "A. Tingginya kadar kompleks imun sirkulasi",
      "B. Aktivasi komplemen",
      "C. Tingginya kadar IgG sirkulasi",
      "D. Akumulasi IgE pada permukaan sel mast",
      "E. Peningkatan limfosit T sitotoksik"
    ],
    "answer": 3,
    "rationale": "Anafilaksis merupakan reaksi hipersensitivitas tipe I (tipe cepat) yang dimediasi oleh ikatan alergen (antibiotik) dengan antibodi IgE spesifik yang telah terakumulasi pada reseptor permukaan sel mast dan basofil, sehingga memicu degranulasi histamin serta mediator vasoaktif lainnya."
  },
  {
    "id": 83,
    "topic": "Mata (Oftalmologi)",
    "question": "Sebelum pemeriksaan funduskopi, dokter perlu memberikan midriatikum untuk mempermudah pemeriksaan. Obat topikal apa yang dapat diberikan kepada pasien?",
    "options": [
      "A. Pilokarpin",
      "B. Atropin sulfat",
      "C. Nafazolin",
      "D. Timolol",
      "E. Latanoprost"
    ],
    "answer": 1,
    "rationale": "Atropin sulfat merupakan agen antikolinergik (antimuskarinik) topikal yang bekerja menghambat reseptor muskarinik M3 pada otot sfingter pupil dan otot siliaris, sehingga menghasilkan efek midriasis (pelebaran pupil) dan sikloplegia."
  },
  {
    "id": 84,
    "topic": "Muskuloskeletal & Bedah",
    "question": "Seorang anak laki-laki berusia 14 tahun mengeluhkan tulang kering (shin) kanannya menjadi semakin bengkok selama 2 tahun terakhir. Pasien masih bisa berjalan, namun pincang karena bentuk kakinya berbeda. Tidak ada keluhan benjolan di ekstremitas lain, tidak nyeri, tidak ada penurunan berat badan, atau demam. Pemeriksaan fisik menunjukkan penekukan (bowing) pada tibia kanan, dan foto Rontgen menunjukkan lesi litik geografis di diafisis tibia disertai gambaran ground-glass. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Osteokondroma",
      "B. Eksostosis tulang (Bony exostosis)",
      "C. Displasia fibrosa (Fibrous dysplasia)",
      "D. Osteoid osteoma",
      "E. Osteoblastoma"
    ],
    "answer": 2,
    "rationale": "Deformitas tulang panjang berupa penekukan (bowing) progresif tanpa nyeri pada anak/remaja yang disertai gambaran radiologis patognomonik berupa lesi litik geografis di medula diafisis dengan matriks menyerupai kaca buram (ground-glass appearance) merupakan tanda khas displasia fibrosa (fibrous dysplasia)."
  },
  {
    "id": 85,
    "topic": "Neurologi",
    "question": "Seorang pria berusia 50 tahun mengalami kelemahan sejak 2 jam terakhir. Pemeriksaan fisik menunjukkan kekuatan motorik 4 pada kedua tangan dan 3 pada kedua kaki. Refleks fisiologis adalah +1 pada kedua lengan dan +3 pada kedua kaki. Di manakah kemungkinan letak lesi pada kasus ini?",
    "options": [
      "A. Saraf tepi (peripheral nerves)",
      "B. Medula spinalis setinggi vertebra lumbosakral",
      "C. Lobus frontalis parasagital",
      "D. Neuromuscular junction",
      "E. Medula spinalis setinggi vertebra servikal"
    ],
    "answer": 4,
    "rationale": "Tetraparesis akut dengan tanda lesi Lower Motor Neuron (LMN) berupa hiporefleksia (+1) pada kedua lengan (akibat kerusakan kornu anterior/radiks setinggi lesi) dan tanda lesi Upper Motor Neuron (UMN) berupa hiperrefleksia (+3) pada kedua tungkai (akibat gangguan traktus kortikospinalis di bawah level lesi) menunjukkan letak lesi pada medula spinalis setinggi vertebra servikal."
  },
  {
    "id": 86,
    "topic": "Gastroenterohepatologi",
    "question": "Seorang wanita berusia 36 tahun datang dengan keluhan BAB berdarah selama empat hari. Ia sering mengeluhkan BAB cair selama tiga bulan terakhir. Ia merasa lemas, pucat, dan kadang-kadang nyeri di perut kiri bawah. Ia mengeluhkan mulut/lidah perih, kulit gatal, dan sendi sakit saat bergerak. Ayahnya memiliki masalah pencernaan dan sering diare. Pemeriksaan fisik menunjukkan tingkat kesadaran compos mentis. Berat badan 50 kg, tinggi badan 158 cm, konjungtiva anemis, dan tidak ikterik. Pyoderma gangrenosum (positif) terlihat pada kulit kaki kirinya. Temuan laboratorium: Hb 10,3 g%, leukosit 5700/mm³, trombosit 234.000/mm³. Apakah masalah/diagnosis kerja untuk pasien ini?",
    "options": [
      "A. Kanker kolon",
      "B. Divertikulosis kolon",
      "C. Irritable bowel syndrome (IBS)",
      "D. Kolitis iskemik",
      "E. Inflammatory bowel disease (IBD)"
    ],
    "answer": 4,
    "rationale": "Diare kronis (>3 bulan) disertai BAB berdarah, nyeri perut kiri bawah, anemia, riwayat keluarga, serta manifestasi ekstraintestinal khas berupa stomatitis aftosa, artralgia, dan pyoderma gangrenosum menegakkan diagnosis kerja Inflammatory Bowel Disease (IBD)."
  },
  {
    "id": 87,
    "topic": "Nefrologi & Urologi",
    "question": "Seorang anak laki-laki berusia 12 tahun dibawa oleh orang tuanya ke IGD dengan nyeri mendadak pada testis kanan sejak 3 jam sebelum masuk rumah sakit. Tidak ada keluhan buang air kecil. Pada pemeriksaan fisik, tanda vital dan status generalis dalam batas normal. Testis kanan sedikit membesar, nyeri tekan, dengan perubahan sumbu horizontal, dan refleks kremaster tidak ada. Apakah diagnosis yang paling tepat pada kasus ini?",
    "options": [
      "A. Epididimitis kanan",
      "B. Hernia skrotalis inkarserata kanan",
      "C. Torsio testis kanan",
      "D. Varikokel kanan",
      "E. Orkitis kanan"
    ],
    "answer": 2,
    "rationale": "Nyeri testis akut mendadak pada remaja disertai pembengkakan testis, perubahan sumbu testis menjadi horizontal (bell-clapper deformity), dan hilangnya refleks kremaster merupakan temuan klinis klasik torsio testis kanan yang membutuhkan detorsi segera."
  },
  {
    "id": 88,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang pasien dengan stenosis aorta datang dengan keluhan pusing, sesak napas saat beraktivitas, dan nyeri dada. Apakah mekanisme hemodinamik utama yang paling mungkin menyebabkan gejala-gejala ini?",
    "options": [
      "A. Regurgitasi aorta progresif",
      "B. Hipertensi pulmonal berat",
      "C. Peningkatan curah jantung yang berlebihan",
      "D. Penurunan aliran darah ke arteri koroner",
      "E. Peningkatan tekanan vena pulmonalis"
    ],
    "answer": 3,
    "rationale": "Pada stenosis aorta, obstruksi aliran keluar ventrikel kiri menyebabkan hipertrofi miokard konsentrik, peningkatan tekanan akhir diastolik ventrikel kiri, dan kompresi pembuluh koroner subendokardial disertai penurunan tekanan perfusi aorta, sehingga menurunkan aliran darah ke arteri koroner dan memicu iskemia miokard."
  },
  {
    "id": 89,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang wanita berusia 50 tahun datang ke poliklinik rawat jalan dengan bengkak dan nyeri mendadak pada tungkai kanan sejak 5 jam yang lalu. Ia pernah merasakan keluhan serupa sebelumnya. Pasien baru saja kembali dari perjalanan dari Eropa menggunakan pesawat. Pemeriksaan fisik menunjukkan tanda-tanda vital dalam batas normal, dan pemeriksaan lokal tungkai bawah kanan menunjukkan edema serta tanda Homans positif. Bagaimanakah patofisiologi yang mendasari gejala pada pasien ini?",
    "options": [
      "A. Obstruksi pembuluh darah arteri tungkai",
      "B. Obstruksi akut vena dalam tungkai (deep vein)",
      "C. Infeksi jaringan di bawah kulit tungkai (selulitis)",
      "D. Infeksi pembuluh darah vena tepi tungkai (tromboflebitis)",
      "E. Penyakit gangguan katup vena"
    ],
    "answer": 1,
    "rationale": "Edema dan nyeri tungkai unilateral mendadak disertai tanda Homans positif setelah imobilisasi lama (perjalanan pesawat jarak jauh) merupakan manifestasi Trombosis Vena Dalam (Deep Vein Thrombosis / DVT) yang disebabkan oleh obstruksi akut vena dalam tungkai oleh trombus."
  },
  {
    "id": 90,
    "topic": "Neurologi",
    "question": "Seorang pasien laki-laki berusia 26 tahun saat ini berada pada hari ke-7 pascakecelakaan dengan fraktur terbuka pada tungkai. Pasien mengalami spasme, kejang, dan tidak mampu membuka mulutnya. Kejang disertai kekakuan dinding perut (rigidity) selama 3 menit. Analisis gas darah arteri saat pasien bernapas di udara ruangan menunjukkan: pH 7,32, PCO2 50 mmHg, PO2 50 mmHg. Tekanan darah 120/80 mmHg, nadi 100 kali/menit. Pasien dikonsulkan untuk masuk ICU. Terapi apa yang dapat diberikan untuk mengatasi kejang pada kasus ini?",
    "options": [
      "A. Oksigen",
      "B. Antibiotik",
      "C. Benzodiazepin",
      "D. Ventilasi mekanis",
      "E. Bikarbonat"
    ],
    "answer": 2,
    "rationale": "Pasien mengalami tetanus generalisata (trismus, rigiditas dinding perut, dan spasme umum pascafraktur terbuka).\nTerapi lini pertama untuk mengatasi kejang dan spasme otot akibat blokade neurotransmiter inhibitorik oleh tetanospasmin adalah pemberian agonis reseptor GABA-A golongan benzodiazepin (seperti diazepam)."
  },
  {
    "id": 91,
    "topic": "Dermatovenerologi",
    "question": "Ny. A, 28 tahun, datang kepada Anda dengan keluhan keputihan yang banyak dan berbau amis, tidak ada keluhan berkemih, sekret tebal berwarna putih, tidak ada nyeri perut, dan gatal disangkal. Pada pemeriksaan spekulum, serviks normal, fluor albus (+), fluxus (-), pemeriksaan pH 4,9, dan pewarnaan Gram menunjukkan clue cells. Apakah tatalaksana yang tepat pada kasus ini?",
    "options": [
      "A. Ketokonazol 400 mg",
      "B. Nistatin 100.000 IU",
      "C. Seftriakson 3 gram",
      "D. Metronidazol 1 gram",
      "E. Penisilin G 1 juta unit"
    ],
    "answer": 3,
    "rationale": "Keputihan berwarna putih keabu-abuan berbau amis (fishy odor) tanpa tanda inflamasi/gatal, pH vagina > 4,5 (4,9), serta ditemukannya clue cells pada pewarnaan Gram memenuhi kriteria Amsel untuk vaginosis bakterialis, yang diterapi dengan Metronidazol (2x500 mg atau 1 gram/hari)."
  },
  {
    "id": 92,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang pria berusia 25 tahun dengan riwayat penyalahgunaan narkoba suntik datang ke IGD dengan keluhan demam selama 2 minggu, disertai lemas dan mual. Tekanan darah 120/70 mmHg. denyut nadi 110 kali/menit, suhu 38.5°C. Bising pansistolik ditemukan di garis parasternal kanan bawah. Ekokardiografi menunjukkan adanya massa intrakardiak yang menempel pada daun katup trikuspid, disertai regurgitasi katup trikuspid. Mikroorganisme manakah yang paling mungkin tumbuh pada kultur darah pasien?",
    "options": [
      "A. Candida albicans",
      "B. Coxiella burnetii",
      "C. Pseudomonas aeruginosa",
      "D. Staphylococcus aureus",
      "E. Klebsiella pneumoniae"
    ],
    "answer": 3,
    "rationale": "Endokarditis infektif jantung kanan yang melibatkan katup trikuspid (ditandai vegetasi katup dan bising pansistolik regurgitasi trikuspid) pada pengguna narkoba suntik paling sering disebabkan oleh inokulasi bakteri flora kulit Staphylococcus aureus ke dalam sirkulasi vena."
  },
  {
    "id": 93,
    "topic": "Neurologi",
    "question": "Seorang wanita berusia 82 tahun dibawa oleh putrinya ke Puskesmas karena sering lupa meletakkan barang dan sering menanyakan hal yang sama berulang kali. Keluhan bertahap memburuk dalam 2 tahun terakhir. Pasien mulai kesulitan mengelola keuangan dan sering tersesat di sekitar lingkungan rumahnya, namun masih bisa makan, mandi, buang air kecil, dan buang air besar secara mandiri. Riwayat stroke, trauma kepala, dan depresi disangkal. Pasien tidak memiliki riwayat diabetes melitus atau hipertensi. Pemeriksaan fisik: compos mentis, tekanan darah 120/80 mmHg, denyut nadi 76/menit, frekuensi napas 18/menit, refleks patologis (-), tidak tampak defisit neurologis. Pemeriksaan SKILAS menunjukkan gangguan orientasi tanggal-hari dan word recall, skor Mini-Cog: 0/5, IADL (Instrumental Activity Daily Living) 0/8. Apakah diagnosis yang benar pada kasus ini?",
    "options": [
      "A. Pseudodemensia",
      "B. Depresi",
      "C. Delirium",
      "D. Gangguan Kognitif Ringan (Mild Cognitive Impairment / MCI)",
      "E. Demensia"
    ],
    "answer": 4,
    "rationale": "Penurunan fungsi memori dan kognitif progresif kronis (Mini-Cog 0/5) pada kesadaran jernih yang telah mengganggu kemandirian aktivitas instrumental sehari-hari secara signifikan (IADL 0/8, seperti kesulitan mengelola keuangan dan tersesat) menegakkan diagnosis demensia."
  },
  {
    "id": 94,
    "topic": "Dermatovenerologi",
    "question": "Seorang pria berusia 25 tahun saat ini mengalami kantuk setelah mengonsumsi obat yang diresepkan untuk kulit gatal. Neurotransmiter manakah yang terdeteksi meningkat pada kasus ini?",
    "options": [
      "A. Oreksin",
      "B. Histamin",
      "C. Dopamin",
      "D. Serotonin",
      "E. Adenosin"
    ],
    "answer": 1,
    "rationale": "Pada keluhan gatal kulit (pruritus alergi), terjadi peningkatan pelepasan histamin di jaringan perifer, sementara pemberian obat antihistamin generasi pertama yang menembus sawar darah-otak akan memblokade reseptor H1 histaminergik sentral (yang normalnya mempertahankan kondisi terjaga/wakefulness) sehingga memicu efek samping kantuk."
  },
  {
    "id": 95,
    "topic": "Neurologi",
    "question": "Seorang pria berusia 78 tahun datang ke klinik dengan keluhan gemetar (tremor) pada kedua tangan selama 6 bulan terakhir. Gejala dimulai dengan kelambatan saat berjalan dan berganti posisi. Pasien juga terkadang merasa tidak seimbang saat berjalan. Pada pemeriksaan fisik, terdapat rigiditas pada kedua lengan, instabilitas postural, dan tremor pada kedua lengan saat istirahat (resting tremor). Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Malformasi Chiari",
      "B. Tremor esensial",
      "C. Ataksia spinoserebellar",
      "D. Infark serebelum",
      "E. Penyakit Parkinson"
    ],
    "answer": 4,
    "rationale": "Ditemukannya gejala kardinal sindrom parkinsonisme yang meliputi tremor saat istirahat (resting tremor), bradikinesia (kelambatan berjalan dan berganti posisi), rigiditas, serta instabilitas postural pada pasien usia lanjut merupakan tanda khas penyakit Parkinson."
  },
  {
    "id": 96,
    "topic": "Psikiatri",
    "question": "Nn. K, seorang wanita berusia 29 tahun, datang ke poliklinik rawat jalan dengan keluhan utama tidak bisa tidur selama sebulan terakhir. Pasien mudah tersinggung/marah. Ia melaporkan mendengar orang-orang mengomentari dirinya dengan jelas, meskipun tidak ada orang yang terlihat, selama tiga bulan terakhir, dan ia percaya bahwa sekelompok orang sedang berusaha membunuhnya. Tidak ada riwayat penyalahgunaan zat, penyakit fisik, atau gangguan psikiatri sebelumnya. Pemeriksaan fisik: tekanan darah 110/80 mmHg. nadi 72/menit, suhu 36,7°C, tinggi badan 158 cm, berat badan 60 kg, tanpa kelainan neurologis. Apakah diagnosis yang paling tepat untuk kasus ini?",
    "options": [
      "A. Skizofrenia katatonik",
      "B. Skizofrenia paranoid",
      "C. Skizofrenia hebefrenik (terorganisasi)",
      "D. Gangguan psikotik akut",
      "E. Gangguan waham menetap"
    ],
    "answer": 1,
    "rationale": "Adanya gejala psikotik yang telah berlangsung selama 3 bulan (memenuhi kriteria durasi minimal 1 bulan pada PPDGJ-III) dengan gambaran klinis yang didominasi oleh halusinasi auditorik (suara yang mengomentari perilaku pasien) dan waham kejar/persekutorik merupakan kriteria diagnostik skizofrenia paranoid."
  },
  {
    "id": 97,
    "topic": "Pediatri / Anak",
    "question": "Seorang anak laki-laki berusia 3 tahun dibawa ke dokter karena batuk persisten yang telah ada selama dua minggu terakhir. Sebelumnya, anak mengalami demam dan pilek. Menurut ibunya, anak tersebut sering muntah akibat batuknya. Anak belum pernah menerima imunisasi apa pun. Pemeriksaan fisik menunjukkan adanya bintik-bintik perdarahan (hemorrhagic spots) pada mata pasien. Faktor virulensi apa yang dimiliki oleh bakteri penyebab gejala pasien ini?",
    "options": [
      "A. Eksotoksin A-B",
      "B. Kapsul",
      "C. Protein B",
      "D. Protein F",
      "E. Hialuronidase"
    ],
    "answer": 0,
    "rationale": "Batuk paroksismal persisten selama 2 minggu yang diikuti muntah pascabatuk (post-tussive vomiting) dan perdarahan subkonjungtiva pada anak yang belum diimunisasi merupakan gambaran khas pertusis akibat infeksi Bordetella pertussis, yang menghasilkan faktor virulensi utama berupa Toksin Pertusis (suatu eksotoksin tipe A-B yang menginaktivasi protein Gi dan meningkatkan cAMP)."
  },
  {
    "id": 98,
    "topic": "Endokrin & Metabolik",
    "question": "Seorang pasien wanita berusia 75 tahun dibawa ke IGD dalam kondisi lemas dan gelisah sejak 1 jam yang lalu. Keluhan mual, muntah, dan demam disangkal. Pasien menderita diabetes melitus tipe 2, hipertensi, dan dislipidemia. Pasien rutin mengonsumsi Glibenklamid 1x5 mg, Kaptopril 2x25 mg, dan Simvastatin 1x10 mg. Saat ini, pasien mengalami gangguan daya ingat dan kadang-kadang mengonsumsi obatnya dua kali lebih sering dari jadwal. Pada pemeriksaan fisik, tekanan darah 130/80 mmHg, kesadaran E3M4V3, frekuensi napas 18 kali/menit, denyut nadi 88 kali/menit, saturasi oksigen 99% tanpa suplementasi oksigen, dan gula darah sewaktu 50 mg/dL. Apakah faktor risiko utama yang menyebabkan hipoglikemia pada pasien ini?",
    "options": [
      "A. Hipertensi",
      "B. Sulfonilurea",
      "C. Biguanida",
      "D. Dislipidemia",
      "E. Terapi reduktase HMG-CoA"
    ],
    "answer": 1,
    "rationale": "Glibenklamid adalah obat hipoglikemik oral golongan sulfonilurea kerja panjang (insulin secretagogue) yang memicu sekresi insulin sel beta pankreas secara terus-menerus tanpa bergantung pada kadar glukosa darah, sehingga menjadi faktor risiko utama terjadinya hipoglikemia berat pada pasien lansia."
  },
  {
    "id": 99,
    "topic": "Obstetri & Ginekologi",
    "question": "Seorang wanita berusia 25 tahun mengalami pendarahan pascapersalinan setelah persalinan pervaginam pertamanya sekitar 15 menit yang lalu di puskesmas. Plasenta lahir lengkap. Saat ini terdapat perdarahan dari jalan lahir yang tidak kunjung berhenti. Tanda vital: tekanan darah 80/40 mmHg, nadi 120/menit, frekuensi napas 24/menit, suhu 37.3°C Konjungtiva anemis, akral dingin. Pemeriksaan fisik menemukan uterus lembek (boggy), tinggi fundus 2 jari di bawah pusat. Tidak terdapat robekan pada jalan lahir. Dokter kemudian melakukan resusitasi. Penanganan yang dapat dilakukan selama proses rujukan adalah:",
    "options": [
      "A. Transfusi darah",
      "B. Pemberian faktor pembekuan dan asam traneksamat",
      "C. Kompresi bimanual",
      "D. Injeksi Oksitosin",
      "E. Kompresi aorta abdominalis"
    ],
    "answer": 2,
    "rationale": "Perdarahan pascapersalinan dini dengan uterus teraba lembek (boggy) setelah plasenta lahir lengkap dan tanpa robekan jalan lahir disebabkan oleh atonia uteri.\nPenanganan mekanik utama untuk mengontrol perdarahan dan mempertahankan kontraksi uterus hingga/selama proses rujukan (bersama alternatif kompresi aorta abdominalis) adalah tindakan kompresi bimanual."
  },
  {
    "id": 100,
    "topic": "Gastroenterohepatologi",
    "question": "Seorang pria berusia 55 tahun datang dengan pembesaran perut. Pemeriksaan fisik menunjukkan spider nevi, eritema palmaris, shifting dullness positif, tidak ada pitting edema. Hasil laboratorium: albumin serum 2,5 g/dL natrium 135 mEq/L. Apakah mekanisme utama yang menyebabkan keluhan pembesaran perut pada pasien ini?",
    "options": [
      "A. Peningkatan tekanan onkotik intravaskular",
      "B. Peritonitis",
      "C. Obstruksi limfatik",
      "D. Gagal jantung kanan",
      "E. Hipertensi portal"
    ],
    "answer": 4,
    "rationale": "Temuan asites (shifting dullness positif) disertai stigmata penyakit hati kronis (spider nevi, eritema palmaris) dan hipoalbuminemia menunjukkan sirosis hepatis dekompensata, di mana mekanisme hemodinamik utama yang mengawali pembentukan cairan asites di rongga peritoneum adalah hipertensi portal."
  },
  {
    "id": 101,
    "topic": "THT-KL",
    "question": "Seorang wanita berusia 18 tahun datang dengan keluhan hidung tersumbat selama 6 bulan terakhir. Pasien melaporkan hidung tersumbat disertai keluar cairan bening/encer (watery nasal discharge). Ia sering menggunakan obat tetes hidung secara terus-menerus selama sekitar 5 bulan untuk meredakan gejalanya. Ia didiagnosis menderita asma saat masa kanak-kanak. Pemeriksaan rinoskopi: konka nasalis edema dan hiperemis, dengan sekret mukoid dan penyempitan rongga hidung. Pasien memiliki riwayat gatal-gatal jika terpapar debu. Apakah diagnosis yang paling tepat pada kasus ini?",
    "options": [
      "A. Rinitis akut",
      "B. Rinitis vasomotor",
      "C. Rinitis atopik",
      "D. Rinitis medikamentosa",
      "E. Rinitis alergi"
    ],
    "answer": 3,
    "rationale": "Pemakaian obat tetes hidung vasokonstriktor/dekongestan topikal secara terus-menerus dalam jangka panjang (5 bulan) menyebabkan takifilaksis dan vasodilatasi balik (rebound congestion) dengan gambaran rinoskopi berupa konka nasalis yang edema dan hiperemis, yang menegakkan diagnosis rinitis medikamentosa."
  },
  {
    "id": 102,
    "topic": "Obstetri & Ginekologi",
    "question": "Seorang wanita berusia 38 tahun datang untuk menjalani pemeriksaan skrining kanker serviks tahunan. Sebagai dokter di klinik, Anda melakukan skrining menggunakan metode IVA karena metode tersebut merupakan satu-satunya metode skrining yang saat ini tersedia di fasilitas kesehatan primer Anda. Apakah prinsip pemeriksaan metode skrining kanker serviks yang tersedia di fasilitas kesehatan primer tersebut?",
    "options": [
      "A. Dilakukan dengan prinsip pembesaran visual menggunakan lensa dan pencahayaan",
      "B. Dilakukan berdasarkan prinsip sitologi eksfoliatif",
      "C. Dilakukan berdasarkan prinsip penyerapan asam asetat oleh sel-sel patologis",
      "D. Dilakukan dengan pemeriksaan mikroskopis sel",
      "E. Dilakukan berdasarkan prinsip eksisi jaringan patologis"
    ],
    "answer": 2,
    "rationale": "Pemeriksaan Inspeksi Visual dengan Asam Asetat (IVA) bekerja berdasarkan prinsip penyerapan asam asetat 3-5% yang memicu koagulasi reversibel protein intraseluler pada sel epitel serviks displastik/patologis (yang memiliki kepadatan inti dan protein tinggi), sehingga tampak berubah warna menjadi putih (acetowhite)."
  },
  {
    "id": 103,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Badan Eksekutif Mahasiswa gabungan fakultas di Rumpun Ilmu Kesehatan Universitas Indonesia (RIK UI) akan menyelenggarakan kegiatan pengabdian masyarakat untuk masyarakat Baduy Dalam. Sebagai penanggung jawab kegiatan, Anda sedang menyiapkan rencana intervensi kesehatan. Sudah menjadi rahasia umum bahwa masyarakat Baduy Dalam dikenal sangat memegang teguh adat istiadat dan kearifan lokal. Pada pertengahan September 2022, berbagai media nasional melaporkan adanya enam kematian akibat tuberkulosis pada masyarakat Baduy Dalam. Anda kemudian memutuskan untuk memberikan edukasi mengenai tuberkulosis. Dari perspektif pasien/klien, hambatan komunikasi apa yang paling mungkin terjadi saat melakukan intervensi kesehatan pada masyarakat Baduy Dalam?",
    "options": [
      "A. Tingkat pengetahuan (Knowledge level)",
      "B. Pendidikan (Education)",
      "C. Bahasa (Language)",
      "D. Usia (Age)",
      "E. Budaya (Culture)"
    ],
    "answer": 4,
    "rationale": "Pada komunitas adat seperti masyarakat Baduy Dalam yang sangat memegang teguh adat istiadat dan kearifan lokal, nilai-nilai tradisi setempat menjadi faktor penentu penerimaan informasi medis modern, sehingga hambatan komunikasi utama dari perspektif sasaran adalah faktor budaya (culture)."
  },
  {
    "id": 104,
    "topic": "Dermatovenerologi",
    "question": "Seorang wanita berusia 20 tahun datang ke poliklinik Dermatologi dan Venereologi dengan keluhan bintik-bintik merah di wajahnya selama kurang lebih 3 bulan. Bintik-bintik tersebut sedikit nyeri dan sangat mengganggu penampilannya. Pada pemeriksaan fisik daerah wajah, terdapat tiga papul eritematosa, disertai 10 komedo terbuka dan tertutup. Apakah terapi yang paling tepat untuk pasien ini?",
    "options": [
      "A. Retinoid topikal, benzoil peroksida, dan doksisiklin oral",
      "B. Retinoid topikal, antimikroba topikal, dan isotretinoin oral",
      "C. Retinoid topikal, antimikroba topikal, dan spironolakton oral",
      "D. Retinoid topikal, antimikroba topikal, dan doksisiklin oral",
      "E. Retinoid topikal dan antimikroba topikal"
    ],
    "answer": 4,
    "rationale": "Berdasarkan klasifikasi Lehmann pada pedoman PERDOSKI, temuan 10 komedo (<20) dan 3 papul inflamasi (<15) tanpa nodul/kista (total lesi <30) termasuk akne vulgaris derajat ringan tipe papulopustular, sehingga terapi lini pertama yang tepat adalah kombinasi retinoid topikal dan antimikroba topikal tanpa antibiotik sistemik."
  },
  {
    "id": 105,
    "topic": "Endokrin & Metabolik",
    "question": "Seorang pria berusia 48 tahun datang dengan penurunan berat badan dalam enam bulan terakhir. Ia juga mengeluhkan sering buang air kecil, sering haus, sering lapar, cepat lelah, dan sering mengantuk. Ibunya menderita diabetes, dan ayahnya menderita hipertensi. Hasil tes gula darah sewaktunya adalah 280 mg/dL. Manakah dari perubahan metabolik berikut yang telah terjadi pada pasien ini?",
    "options": [
      "A. Peningkatan lipogenesis",
      "B. Penurunan aktivitas piruvat karboksilase",
      "C. Penurunan glukoneogenesis",
      "D. Peningkatan asam lemak bebas (free fatty acids)",
      "E. Penurunan aktivitas PEP-karboksikinase"
    ],
    "answer": 3,
    "rationale": "Pada diabetes melitus (trias klasik polidipsia, poliuria, polifagia disertai penurunan berat badan dan GDS 280 mg/dL), defisiensi/resistensi insulin menghilangkan hambatan pada enzim hormone-sensitive lipase di jaringan adiposa, sehingga memicu peningkatan lipolisis yang meningkatkan kadar asam lemak bebas (free fatty acids) dalam darah."
  },
  {
    "id": 106,
    "topic": "Obstetri & Ginekologi",
    "question": "Seorang wanita berusia 29 tahun, P3A0, datang ke puskesmas dengan keluhan benjolan kemerahan pada labia. Keluhan sudah ada sejak 1 tahun yang lalu. Benjolan berukuran sebesar telur ayam, terasa gatal, dan kadang-kadang nyeri. Pasien juga mengeluhkan keputihan yang terasa gatal. Pemeriksaan vulva lokal di sisi posterolateral kiri menunjukkan benjolan sebesar telur ayam, konsistensi lunak, fluktuasi (+), nyeri tekan (+). Pemeriksaan juga menunjukkan sedikit cairan putih dengan bau tidak khas. Apakah tatalaksana yang tepat pada kasus ini?",
    "options": [
      "A. Marsupialisasi",
      "B. Insisi dan drainase",
      "C. Insisi",
      "D. Kateter Word (Word catheter)",
      "E. Eksisi"
    ],
    "answer": 0,
    "rationale": "Benjolan kistik fluktuatif dan nyeri tekan di sisi posterolateral labia yang berlangsung kronis (1 tahun) merupakan kista/abses kelenjar Bartholin.\nTatalaksana definitif pilihan untuk mencegah kekambuhan sekaligus mempertahankan fungsi lubrikasi kelenjar adalah prosedur marsupialisasi."
  },
  {
    "id": 107,
    "topic": "Nefrologi & Urologi",
    "question": "Seorang wanita berusia 50 tahun datang ke IGD dengan nyeri pinggang kanan yang menjalar ke perut bawah sejak 3 hari yang lalu. Keluhan juga disertai demam dan menggigil. Pemeriksaan fisik menemukan nyeri ketok CVA kanan. Hasil urinalisis menunjukkan: keruh, protein negatif, eritrosit 3-5/LPB, leukosit 30-40/LPB, leukosit esterase positif, nitrit positif. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Nefrolitiasis",
      "B. Pielonefritis akut",
      "C. Sistitis akut",
      "D. Pielonefritis kronis",
      "E. Sistitis kronis"
    ],
    "answer": 1,
    "rationale": "Kombinasi gejala sistemik (demam tinggi dan menggigil), nyeri pinggang dengan nyeri ketok sudut kostovertebra (CVA) kanan positif, serta hasil urinalisis yang menunjukkan piuria, leukosit esterase positif, dan nitrit positif menegakkan diagnosis pielonefritis akut."
  },
  {
    "id": 108,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Puskesmas Z sedang menyelenggarakan pelayanan jaminan mutu (quality assurance). Tim jaminan mutu sedang menilai pelayanan imunisasi dan vaksinasi yang diberikan oleh puskesmas. Bagaimana tim menilai dan menentukan apakah ada masalah pada pelayanan imunisasi dan vaksinasi?",
    "options": [
      "A. Laporan Pasien (Patient Reports)",
      "B. Laporan Tahunan Puskesmas",
      "C. Membandingkan Standar dengan Pelayanan yang Diberikan",
      "D. Alur Pelayanan (Service Flow)",
      "E. Standar Pelayanan yang Ditetapkan"
    ],
    "answer": 2,
    "rationale": "Dalam siklus jaminan mutu (Quality Assurance), identifikasi masalah dilakukan dengan mengukur kinerja/pelayanan aktual yang diberikan dan membandingkannya terhadap standar pelayanan yang telah ditetapkan untuk menilai adanya kesenjangan (gap)."
  },
  {
    "id": 109,
    "topic": "Muskuloskeletal & Bedah",
    "question": "Seorang wanita berusia 73 tahun datang dengan nyeri punggung yang semakin memburuk sejak 6 bulan yang lalu. Keluhan tidak disertai nyeri menjalar ke kedua kaki atau kelemahan pada anggota gerak. Pasien telah menopause sejak usia 55 tahun. Pemeriksaan fisik menunjukkan kifosis pada regio torakal. Foto Rontgen menunjukkan penipisan korteks dan penurunan kepadatan tulang. Patofisiologi apa yang mendasari kelainan pada kondisi pasien di atas?",
    "options": [
      "A. Ketidakseimbangan antara deposisi tulang dan resorpsi tulang",
      "B. Erosi degeneratif pada tulang rawan sendi",
      "C. Autoimunitas",
      "D. Gangguan deposisi kalsium pada tulang",
      "E. Peradangan pada sendi"
    ],
    "answer": 0,
    "rationale": "Pasien mengalami osteoporosis pascamenopause (ditandai kifosis torakal, penipisan korteks, dan penurunan densitas tulang), yang didasari oleh defisiensi estrogen sehingga meningkatkan aktivitas osteoklas dan menyebabkan ketidakseimbangan antara resorpsi tulang yang melebihi deposisi/formasi tulang oleh osteoblas."
  },
  {
    "id": 110,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang pria berusia 45 tahun dibawa ke IGD dengan nyeri dada hebat dan riwayat trauma dada akibat kecelakaan lalu lintas 3 jam sebelumnya. Pasien tampak gelisah, akral dingin, dan tekanan darah sistolik 90 mmHg yang turun menjadi 70 mmHg saat inspirasi. Kelainan apa yang mungkin Anda temukan pada pemeriksaan fisik?",
    "options": [
      "A. Pulsus defisit",
      "B. Pleural friction rub",
      "C. Kardiomegali pada perkusi batas jantung",
      "D. Peningkatan tekanan vena jugularis (JVP)",
      "E. Penguatan bunyi jantung S1 pada auskultasi jantung"
    ],
    "answer": 3,
    "rationale": "Riwayat trauma tumpul dada disertai syok dan pulsus paradoksus (penurunan tekanan darah sistolik >10 mmHg saat inspirasi, yaitu dari 90 menjadi 70 mmHg) mengarah pada tamponade jantung akut, yang secara klasik ditandai oleh Trias Beck meliputi hipotensi, suara jantung menjauh (muffled heart sounds), dan peningkatan tekanan vena jugularis (JVP)."
  },
  {
    "id": 111,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Anda saat ini adalah seorang peneliti muda di lembaga penelitian terkemuka di Indonesia. Anda mengamati tren gaya hidup anak-anak yang mengonsumsi minuman berkarbonasi. Anda khawatir apakah kebiasaan minum minuman berkarbonasi ini dapat berdampak pada timbulnya masalah kardiovaskular di masa depan. Anda mencoba mencari bukti ilmiah yang ada sebelum merumuskan masalah ini dalam bentuk proposal penelitian. Rumusan pertanyaan klinis yang baik berdasarkan skenario di atas adalah:",
    "options": [
      "A. Apa penyebab diabetes melitus pada anak-anak?",
      "B. Apakah konsumsi minuman berkarbonasi pada anak menyebabkan gangguan kardiovaskular saat dewasa?",
      "C. Bagaimana minuman berkarbonasi menyebabkan gangguan kardiovaskular di kemudian hari?",
      "D. Apakah gangguan kardiovaskular disebabkan oleh konsumsi minuman berkarbonasi?",
      "E. Apakah anak-anak diperbolehkan mengonsumsi minuman berkarbonasi?"
    ],
    "answer": 1,
    "rationale": "Pertanyaan klinis latar depan (foreground question) yang baik harus spesifik dan memuat komponen PICO secara jelas, yaitu Populasi (anak), Pajanan/Intervensi (konsumsi minuman berkarbonasi), serta Luaran/Outcome (gangguan kardiovaskular saat dewasa/di masa depan)."
  },
  {
    "id": 112,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Nn. R, seorang wanita berusia 35 tahun, datang ke IGD dengan nyeri perut bawah sejak 1 hari yang lalu. Tiga hari sebelumnya, Nn. R mengalami demam ringan dan rasa tidak nyaman di perut. Nn. R telah mengonsumsi obat lambung untuk meredakan rasa tidak nyaman di perutnya, namun keluhannya tidak membaik. Nn. R belum menikah, namun sudah aktif secara seksual. Dokter jaga IGD dengan cepat mempertimbangkan kemungkinan kehamilan ektopik terganggu (KET) dengan apendisitis sebagai diagnosis banding sebelum merencanakan pemeriksaan lebih lanjut. Strategi penalaran klinis apa yang diterapkan oleh dokter tersebut?",
    "options": [
      "A. Probabilistik",
      "B. Pengenalan pola (Pattern recognition)",
      "C. Deterministik",
      "D. Kausal",
      "E. Reflektif"
    ],
    "answer": 1,
    "rationale": "Pengambilan keputusan klinis secara cepat (intuitif/non-analitik) dengan langsung mengenali kumpulan gejala dan profil kunci pasien (nyeri perut bawah akut pada wanita usia reproduktif yang aktif secara seksual) sebagai kemungkinan KET dengan diagnosis banding apendisitis merupakan strategi penalaran klinis pengenalan pola (pattern recognition)."
  },
  {
    "id": 113,
    "topic": "THT-KL",
    "question": "Seorang pria berusia 35 tahun datang ke IGD dengan keluhan nyeri menelan sejak 2 hari yang lalu. Air liur menetes (drooling) karena sulit menelan. Suhunya 38°C. Uvula tampak terdorong/miring ke satu sisi pada pemeriksaan orofaring. Terdapat tanda-tanda inflamasi (kalor, dolor, tumor, dan fungsiolesa), serta teraba area yang lebih lunak dan tampak lebih pucat. Jumlah leukosit meningkat menjadi 20.000/μL. Pemeriksaan mana yang dapat menunjang diagnosis pada pasien ini?",
    "options": [
      "A. Aspirasi nanah dari area yang paling lunak",
      "B. CT scan dengan kontras",
      "C. MRI dengan kontras",
      "D. Foto Rontgen leher jaringan lunak (lateral soft tissue neck X-ray AP/lateral)",
      "E. USG leher dengan Doppler"
    ],
    "answer": 0,
    "rationale": "Odinofagia hebat disertai drooling, demam, pembengkakan peritonsilar fluktuatif (lunak), dan deviasi uvula ke arah kontralateral merupakan tanda khas abses peritonsil (Quinsy).\nBaku emas penunjang konfirmasi diagnosis sekaligus tindakan terapeutik awal adalah pungsi/aspirasi jarum pada area yang paling lunak/fluktuatif untuk membuktikan adanya pus (nanah)."
  },
  {
    "id": 114,
    "topic": "Neurologi",
    "question": "Seorang pria berusia 35 tahun dibawa oleh keluarganya ke IGD rumah sakit karena kejang berulang di seluruh tubuh. Pada pemeriksaan fisik, pasien tampak sadar namun kejang saat dirangsang. Terdapat kekakuan pada leher dan perut. Beberapa hari sebelumnya, jempol kaki/tangan kanan pasien tertusuk paku berkarat. Dokter mendiagnosisnya menderita tetanus. Bagaimana toksin tetanus menyebar pada kasus di atas?",
    "options": [
      "A. Toksin menyebar sepanjang serabut saraf melalui transpor aksonal retrograde",
      "B. Toksin menyebar secara hematogen (melalui pembuluh darah)",
      "C. Toksin menyebar sepanjang serabut saraf melalui transpor aksonal anterograde lambat",
      "D. Toksin menyebar melalui saluran limfatik",
      "E. Toksin menyebar sepanjang serabut saraf melalui transpor aksonal anterograde cepat"
    ],
    "answer": 0,
    "rationale": "Neurotoksin tetanospasmin yang diproduksi oleh Clostridium tetani pada luka masuk ke ujung presinaptik lower motor neuron di neuromuscular junction, kemudian ditransportasikan menuju sistem saraf pusat (kornu anterior medula spinalis dan batang otak) di sepanjang serabut saraf melalui transpor aksonal retrograd."
  },
  {
    "id": 115,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang pria berusia 30 tahun datang dengan luka/ulkus pada ujung jari kaki kedua, ketiga, dan keempat kaki kanan. Pasien adalah seorang perokok aktif dan telah mengalami kemerahan pada tungkai bawahnya selama beberapa tahun terakhir. Pemeriksaan fisik menunjukkan penurunan pulsasi arteri tibialis posterior dan dorsalis pedis (+1), namun arteri poplitea masih teraba baik (+2). Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Penyakit Raynaud",
      "B. Penyakit tromboflebitis tungkai",
      "C. Penyakit emboli arteri tungkai",
      "D. Penyakit Buerger (Buerger's disease)",
      "E. Penyakit aterosklerosis"
    ],
    "answer": 3,
    "rationale": "Ulkus iskemik pada ujung-ujung jari ekstremitas disertai penurunan pulsasi arteri distal (a. tibialis posterior dan a. dorsalis pedis) pada pria usia muda (<45 tahun) dengan riwayat perokok aktif merupakan manifestasi klasik tromboangiitis obliterans atau penyakit Buerger (Buerger's disease)."
  },
  {
    "id": 116,
    "topic": "Kardiologi & Vaskular",
    "question": "Seorang pria berusia 30 tahun datang dengan luka/ulkus pada ujung jari kaki kedua, ketiga, dan keempat kaki kanan. Pasien adalah seorang perokok aktif dan telah mengalami kemerahan pada tungkai bawahnya selama beberapa tahun terakhir. Pemeriksaan fisik menunjukkan penurunan pulsasi arteri tibialis posterior dan dorsalis pedis (+1), namun arteri poplitea masih teraba baik (+2). Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Penyakit Raynaud",
      "B. Penyakit tromboflebitis tungkai",
      "C. Penyakit emboli arteri tungkai",
      "D. Penyakit Buerger (Buerger's disease)",
      "E. Penyakit aterosklerosis"
    ],
    "answer": 3,
    "rationale": "Ulkus iskemik pada jari-jari kaki disertai penurunan pulsasi arteri berukuran kecil-sedang di bagian distal (a. tibialis posterior dan a. dorsalis pedis) pada pria dewasa muda perokok aktif merupakan tanda khas tromboangiitis obliterans (Buerger's disease)."
  },
  {
    "id": 117,
    "topic": "Psikiatri",
    "question": "Ny. B, seorang wanita berusia 27 tahun, datang ke puskesmas dengan keluhan sering pusing selama sebulan terakhir setelah suaminya meninggal dunia karena sakit. Ia juga merasa mudah menangis, sering sensitif/mudah marah, dan kurang bersemangat melakukan aktivitas yang sebelumnya disukai. Pasien bekerja sebagai perawat dan tidak dapat bekerja selama seminggu terakhir karena sulit berkonsentrasi. Tidurnya juga terganggu karena sering memikirkan masa depan anaknya yang berusia 2 tahun. Akhir-akhir ini, Ny. B juga mengalami penurunan nafsu makan. Ia tidak pernah mengalami keluhan serupa sebelumnya dan tidak memiliki riwayat penyakit fisik maupun psikiatri. Manakah terapi yang paling tepat untuk pasien ini?",
    "options": [
      "A. Klomipramin 2x2 mg",
      "B. Sertralin 1x250 mg",
      "C. Amitriptilin 1x1 mg",
      "D. Asam valproat 2x 250 mg",
      "E. Fluoksetin 1x10 mg"
    ],
    "answer": 4,
    "rationale": "Pasien mengalami episode depresif (afek depresif, anhedonia, gangguan konsentrasi, insomnia, dan penurunan nafsu makan selama 1 bulan yang mengganggu fungsi pekerjaan).\nTerapi farmakologis lini pertama yang tepat dengan dosis terapeutik awal yang sesuai adalah antidepresan golongan SSRI, yaitu Fluoksetin 1x10-20 mg/hari."
  },
  {
    "id": 118,
    "topic": "Neurologi",
    "question": "Seorang pria berusia 40 tahun datang ke IGD rumah sakit dengan sakit kepala yang memburuk dalam 10 hari terakhir. Ia mengalami demam ringan selama 3 minggu terakhir. Tidak ada kelemahan anggota gerak. Pasien positif HIV dan belum menerima terapi ARV. Tidak ada riwayat tuberkulosis. Sakit kepala dinilai 8/10 pada skala nyeri numerik. Pemeriksaan neurologis: Glasgow Coma Scale 15, kaku kuduk (+), kekuatan motorik sulit dinilai karena pasien kurang kooperatif, namun keempat ekstremitas tampak bergerak aktif. Pungsi lumbal menunjukkan tekanan pembukaan 30 mmHg. Apakah diagnosis yang paling mungkin pada kasus ini?",
    "options": [
      "A. Meningoensefalitis kriptokokus",
      "B. Ensefalitis virus",
      "C. Tuberkuloma",
      "D. Abses otak bakteri",
      "E. Ensefalitis toksoplasma"
    ],
    "answer": 0,
    "rationale": "Nyeri kepala hebat subakut-kronis disertai demam, tanda rangsang meningeal (kaku kuduk positif) tanpa defisit neurologis fokal, serta peningkatan tekanan pembukaan cairan serebrospinal yang signifikan pada penderita HIV yang belum mendapat ARV merupakan gambaran klasik meningoensefalitis kriptokokus (Cryptococcus neoformans)."
  },
  {
    "id": 119,
    "topic": "Endokrin & Metabolik",
    "question": "Ny. Y, 29 tahun, mengalami penurunan nafsu makan sejak berat badannya naik dalam beberapa minggu terakhir. IMT-nya saat ini 23.5 kg/m² dan memiliki aktivitas fisik yang kurang aktif (sedentary). Mekanisme fisiologis apa yang mendasari penurunan nafsu makan ini?",
    "options": [
      "A. Penurunan sekresi leptin oleh adiposit mengaktifkan neuron LHA hipotalamus",
      "B. Penurunan sekresi glukagon mengaktifkan neuron NPY hipotalamus",
      "C. Peningkatan sekresi leptin oleh adiposit mengaktifkan neuron POMC hipotalamus",
      "D. Peningkatan sekresi glukagon mengaktifkan neuron POMC hipotalamus",
      "E. Peningkatan CCK mengaktifkan neuron NPY hipotalamus"
    ],
    "answer": 2,
    "rationale": "Peningkatan massa jaringan adiposa saat berat badan naik memicu peningkatan sekresi hormon leptin oleh sel adiposit, yang kemudian merangsang neuron anoreksigenik POMC (pro-opiomelanocortin) dan menghambat neuron oreksigenik NPY/AgRP di nukleus arkuatus hipotalamus sehingga menekan nafsu makan."
  },
  {
    "id": 120,
    "topic": "Forensik, Medikolegal & IKM",
    "question": "Jenazah seorang laki-laki berusia 20 tahun ditemukan di pinggir jalan dan dibawa oleh polisi ke instalasi pemulasaraan jenazah RSUD karena diduga menjadi korban perampokan. Menurut keluarga, saat korban keluar rumah ia mengendarai sepeda motor, dan saat ini keberadaan sepeda motor serta barang berharga lainnya tidak diketahui. Keluarga ingin segera memakamkan korban di kampung halamannya. Kapan surat keterangan kematian diterbitkan oleh rumah sakit pada kasus di atas?",
    "options": [
      "A. Setelah ada permintaan tertulis dari keluarga",
      "B. Setelah hanya pemeriksaan luar selesai dilakukan",
      "C. Setelah administrasi pelayanan rumah sakit selesai",
      "D. Setelah pemeriksaan selesai sesuai dengan permintaan resmi Visum et Repertum",
      "E. Setelah pemeriksaan dalam (autopsi) dan toksikologi selesai dilakukan"
    ],
    "answer": 3,
    "rationale": "Pada jenazah yang diduga merupakan korban tindak pidana dan dibawa oleh penyidik kepolisian, status jenazah berada di bawah wewenang penyidik untuk kepentingan peradilan, oleh karena itu, surat keterangan kematian baru dapat diterbitkan setelah seluruh pemeriksaan kedokteran forensik selesai dilakukan sesuai dengan permintaan resmi Visum et Repertum dari penyidik."
  }
];
