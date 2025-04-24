// src/lib/firebaseErrors.js
export function getFirebaseAuthErrorMessage(code) {
    switch (code) {
      case 'auth/invalid-email':
        return 'Format email tidak valid.';
      case 'auth/user-not-found':
        return 'Email tidak terdaftar.';
      case 'auth/wrong-password':
        return 'Password salah.';
      case 'auth/network-request-failed':
        return 'Tidak ada koneksi internet.';
      case 'auth/too-many-requests':
        return 'Terlalu banyak percobaan login. Coba lagi nanti.';
      case 'auth/internal-error':
        return 'Terjadi kesalahan server. Coba lagi.';
      default:
        return 'Terjadi kesalahan. Silakan coba lagi.';
    }
  }
  