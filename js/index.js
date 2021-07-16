;(function () {
 function $(id) {
  return document.getElementById(id)
 }

 var card = $('card'),
  openB = $('open'),
  closeB = $('close'),
  timer = null
 console.log('wat', card)
 openB.addEventListener('click', function () {
  card.setAttribute('class', 'open-half')
  if (timer) clearTimeout(timer)
  timer = setTimeout(function () {
   card.setAttribute('class', 'open-fully')
   timer = null
  }, 1000)
 })

 closeB.addEventListener('click', function () {
  card.setAttribute('class', 'close-half')
  if (timer) clearTimerout(timer)
  timer = setTimeout(function () {
   card.setAttribute('class', '')
   timer = null
  }, 1000)
 })
})()

const player = new Plyr('#player', {
 loop: { active: true },
 quality: { default: 720 },
 previewThumbnails: { enabled: true, src: 'css/foto.jpg' },
 controls: ['progress', 'current-time', 'volume', 'play-large']
})

var i = 0
let j = 0
var txt1 =
 'Haii ❤, selamat ulang tahun ya. Cuma ini yang bisa ku kasih ke lu, Semoga hari lahir mu ini membawa keberkahan untuk mu dan semangat untuk menggapai impian mu.'
var speed = 120
var txt2 =
 'Semoga sukses brader. Walaupun ucapannya terlihat sederhana tapi ucapan adalah doa brader. Bacanya jan sambil cengar cengir ya😂'

function Gassngetik() {
 if (i < txt1.length) {
  document.querySelectorAll('.teks')[0].innerHTML += txt1.charAt(i)
  i++
  setTimeout(Gassngetik, speed)
 }
 if (i === txt1.length) {
  document.querySelectorAll('.teks')[1].innerHTML += txt2.charAt(j)
  j++
  setTimeout(Gassngetik, speed)
 }
}

const openBtn = document.getElementById('open')
openBtn.addEventListener('click', () => {
 Gassngetik()
})
