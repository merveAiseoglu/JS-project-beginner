import { TaskManager } from './modules/taskManager.js';
import { WeatherService } from './modules/weatherService.js';
import { StorageManager } from './modules/storage.js';

class App {
    constructor() {
        console.log("🚀 Uygulama başlatılıyor...");

        // Modülleri başlat
        this.taskManager = new TaskManager();
        this.weatherService = new WeatherService();

        console.log("✅ Uygulama başarıyla başlatıldı!");
        console.log("📝 Görev Yöneticisi:", this.taskManager);
        console.log("🌤️ Hava Durumu Servisi:", this.weatherService);
    }
}

// Sayfa yüklendiğinde uygulamayı başlat
document.addEventListener("DOMContentLoaded", () => {
    const app = new App();

    // Hava durumu formu işlemleri
    const havaForm = document.getElementById("havaForm");
    const sehirInput = document.getElementById("sehir");
    const sonucDiv = document.getElementById("sonuc");

    
});
