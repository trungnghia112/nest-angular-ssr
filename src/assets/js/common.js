/**
 *
 <picture>
 <source data-srcset="dummy/1.webp" type="image/webp"/>
 <source data-srcset="dummy/1.jpg"/>
 <img loading="lazy" class="lazyload card-img-top" src="images/img-size/news.png" data-src="dummy/1.jpg" alt="Image description"/>
 </picture>
 */
function lazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // var images = document.querySelectorAll('img[loading="lazy"]');
    var images = document.querySelectorAll('.lazyload')
    var sources = document.querySelectorAll('source[data-srcset]')
    sources.forEach(function(source) {
      source.srcset = source.dataset.srcset
    })
    images.forEach(function(img) {
      img.src = img.dataset.src
    })
  } else {
    var script = document.createElement('script')
    script.src = '/third_party/vanilla-lazyload/dist/lazyload.min.js'
    document.body.appendChild(script)
  }
}


/**
 * Modal Auth
 * @param id
 */
// function showModalAuth(id) {
//   var myNewModalInstance = new BSN.Modal('#modalAuth', { backdrop: true }).show()
//   showModalAuthContent(id)
// }

// function showModalAuthContent(id) {
//   var modalForms = document.querySelectorAll('.modal-form-content')
//   modalForms.forEach(trigger => {
//     trigger.style.display = ''
//   })
//
//   var formEl = document.querySelector(id)
//   formEl.style.display = 'block'
//   return false
// }


/**
 * Rotating Words
 */
function initTextAnimSlider() {
  var textAnimHolder = document.querySelector('[data-words]')
  if (textAnimHolder) {
    var textAnimItem = document.querySelectorAll('.text-anim-item')
    var textAnimItems = document.querySelector('.text-anim-items')
    var animLine = document.querySelector('.anim-line')
    var animIn = 'anim-in'
    var animOut = 'anim-out'
    var lineActiveClass = 'line-active'
    var animNextItem = null
    var animPrevItem = null
    var animFirstLoad = false
    var animDuration = textAnimHolder.getAttribute('data-delay')
    var animCounter = 0
    var setTimeAnim
    var setTimeAnimResize
    animFunc()
    getHolderWidth()

    function animFunc() {
      clearTimeout(setTimeAnim)
      setTimeAnim = setTimeout(function() {
        animFirstLoad = true
        if (animPrevItem !== null) {
          animPrevItem.classList.add(animOut)
        }
        animNextItem = textAnimItems.children[animCounter]

        if (animNextItem) {
          animNextItem.classList.remove(animOut)
          animNextItem.classList.add(animIn)
          animLine.style.width = animNextItem.clientWidth + 'px'
          animLine.classList.add(lineActiveClass)
          animPrevItem = animNextItem
          if (animCounter === textAnimItem.length - 1) {
            animCounter = 0
          } else {
            animCounter++
          }
          animFunc()
        }

      }, animFirstLoad ? animDuration : 100)
    }

    function getHolderWidth() {
      var itemsWidth = []
      for (var i = 0; i < textAnimItem.length; i++) {
        itemsWidth.push(textAnimItem[i].clientWidth)
        // console.log(textAnimItem[i].clientWidth);
      }
      textAnimHolder.style.width = 'auto'
    }

    function resizeHandler() {
      clearTimeout(setTimeAnim)
      clearTimeout(setTimeAnimResize)
      getHolderWidth()
      setTimeAnimResize = setTimeout(function() {
        animFunc()
      }, 50)
    }

    window.addEventListener('resize', resizeHandler)
    window.addEventListener('orientationchange', resizeHandler)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  lazyLoading()
  initTextAnimSlider()
})

if (Modernizr.touch === true && window.innerWidth <= 767) {
  //alert('Touch Screen');
} else {

}
