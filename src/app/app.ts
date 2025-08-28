import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  shareUrl: string = window.location.href; // URL actual
  showShareModal = signal(false);

  async shareSite() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Testa Hermanos',
          text: 'Metalúrgica especializada en forja y mecanizado',
          url: this.shareUrl,
        });
      } catch (err) {
        console.error('Error al compartir:', err);
      }
    } else {
      // Si no soporta Web Share API, mostrar modal
      this.showShareModal.set(true);
    }
  }

  get whatsappShareUrl(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.shareUrl)}`;
  }

  get linkedinShareUrl(): string {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.shareUrl)}`;
  }

  copyLink() {
    navigator.clipboard.writeText(this.shareUrl).then(() => {
      alert('Enlace copiado al portapapeles 📋');
    });
  }

  closeModal() {
    this.showShareModal.set(false);
  }
}
