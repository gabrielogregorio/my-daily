if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/taskssw.js', { scope: '/tasks' })})}