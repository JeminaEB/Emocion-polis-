export function showEmotion(emotion) {
  alert("Te sientes: " + emotion);
  const utterance = new SpeechSynthesisUtterance(emotion);
  speechSynthesis.speak(utterance);
}

// Esto hace accesible la función desde el HTML
window.showEmotion = showEmotion;
