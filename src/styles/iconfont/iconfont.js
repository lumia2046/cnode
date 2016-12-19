;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M533.504 268.288q33.792-41.984 71.68-75.776 32.768-27.648 74.24-50.176t86.528-19.456q63.488 5.12 105.984 30.208t67.584 63.488 34.304 87.04 6.144 99.84-17.92 97.792-36.864 87.04-48.64 74.752-53.248 61.952q-40.96 41.984-85.504 78.336t-84.992 62.464-73.728 41.472-51.712 15.36q-20.48 1.024-52.224-14.336t-69.632-41.472-79.872-61.952-82.944-75.776q-26.624-25.6-57.344-59.392t-57.856-74.24-46.592-87.552-21.504-100.352 11.264-99.84 39.936-83.456 65.536-61.952 88.064-35.328q24.576-5.12 49.152-1.536t48.128 12.288 45.056 22.016 40.96 27.648q45.056 33.792 86.016 80.896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ding" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M898.799192 421.647515 652.021657 421.647515C747.635071 68.468364 586.127515 50.424242 586.127515 50.424242c-68.477414 0-54.265535 54.137535-59.434667 63.158303 0 172.721131-183.462788 308.06497-183.462788 308.06497l0 489.810747c0 48.333576 65.887677 65.737697 91.729455 65.737697L805.774222 977.19596c34.885818 0 63.308283-91.52 63.308283-91.52C960.822303 573.74901 960.822303 480.943838 960.822303 480.943838 960.822303 416.496485 898.799192 421.647515 898.799192 421.647515L898.799192 421.647515M898.799192 421.647515 898.799192 421.647515zM241.961374 421.807838 94.18602 421.807838c-30.526061 0-31.008323 29.972687-31.008323 29.972687l30.526061 493.994667c0 31.420768 31.489293 31.420768 31.489293 31.420768l127.910788 0c26.647273 0 26.406788-20.783838 26.406788-20.783838L279.510626 459.267879C279.511919 421.326869 241.961374 421.807838 241.961374 421.807838L241.961374 421.807838M241.961374 421.807838 241.961374 421.807838z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 239.36m-239.36 0a239.36 239.36 0 1 0 478.72 0 239.36 239.36 0 1 0-478.72 0Z" fill="" ></path>' +
    '' +
    '<path d="M512 478.72a512 512 0 0 0-512 512V1024h1024v-33.28a512 512 0 0 0-512-512z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-back" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.84 140.16a40.96 40.96 0 0 0-58.24 0L295.04 483.2a40.96 40.96 0 0 0 0 58.24l338.56 342.4a40.96 40.96 0 0 0 58.24-58.24L384 512l307.84-314.24a40.96 40.96 0 0 0 0-57.6z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-informatiom" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 640L0 320v576c0-29.44 28.16 0 64 0h896a64 64 0 0 0 64-64V320z" fill="" ></path>' +
    '' +
    '<path d="M960 192H64a64 64 0 0 0-64 64l512 315.52 512-320A64 64 0 0 0 960 192z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huifu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M979.861 238.897l0 394.758c0 76.758-62.138 138.896-138.896 138.896l-208.346 0-10.964 179.102-204.69-175.449-230.275 0c-76.758 0-138.896-62.138-138.896-138.896l0-398.412c0-76.758 62.138-138.896 138.896-138.896l654.274 0c76.758 0 138.896 62.138 138.896 138.896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chakanguo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M509.618255 415.794891c-42.695405 0-77.253478 38.371936-77.253478 85.73771 0 47.352471 34.558074 86.22071 77.253478 86.22071 42.666752 0 76.716242-38.867216 76.716242-86.22071C586.333474 454.181153 552.285007 415.794891 509.618255 415.794891zM511.518534 237.895155c-211.54809 0-383.266034 159.858848-383.266034 274.586822 0 114.726951 171.717943 273.623891 383.266034 273.623891 212.484416 0 384.227941-162.52149 384.227941-273.623891C895.746476 401.393903 724.00295 237.895155 511.518534 237.895155zM510.071579 689.900759c-89.698928 0-162.133657-81.708953-162.133657-181.90291 0-101.156888 72.434729-182.397167 162.133657-182.397167 90.182952 0 163.099658 81.241302 163.099658 182.397167C673.171238 608.204086 600.254531 689.900759 510.071579 689.900759z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)