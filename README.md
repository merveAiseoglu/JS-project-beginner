# Vanilla JS Task & Weather Dashboard 🌤️📝

Bu proje, kullanıcıların günlük görevlerini organize edebildiği ve anlık hava durumu verilerini sorgulayabildiği modüler bir web uygulamasıdır. Herhangi bir framework kullanılmadan, tamamen **Vanilla JavaScript** ile modern web standartlarına (ES6 Modules) uygun olarak geliştirilmiştir.

## 🚀 Özellikler

* **Görev Yönetimi:** Görev ekleme, listeleme, önem derecesi belirleme ve tamamlandı/tamamlanmadı olarak işaretleme.
* **Hava Durumu Sorgulama:** `wttr.in` API entegrasyonu ile şehirlere göre anlık sıcaklık, rüzgar hızı ve hava durumu açıklaması.
* **Kalıcı Veri (Local Storage):** Tarayıcı kapatılıp açılsa bile görev listesi ve aratılan şehirler geçmişi kaybolmaz.
* **Modüler Mimari:** Sürdürülebilir kod prensipleri için `TaskManager`, `WeatherService` ve `StorageManager` olarak ayrılmış ES6 sınıf (class) yapısı.

## 🛠️ Kullanılan Teknolojiler

* **Frontend:** HTML5, CSS3, JavaScript (ES6)
* **API:** Fetch API, [wttr.in API](https://github.com/chubin/wttr.in)
* **Veri Saklama:** Tarayıcı Local Storage

## 💻 Kurulum ve Çalıştırma

Projede herhangi bir paket yöneticisi (npm vb.) kullanılmadığı için doğrudan çalıştırılabilir durumdadır:
1. Repoyu bilgisayarınıza klonlayın.
2. `index.html` dosyasını tarayıcınızda açın veya Visual Studio Code üzerinden `Live Server` eklentisi ile çalıştırın.
