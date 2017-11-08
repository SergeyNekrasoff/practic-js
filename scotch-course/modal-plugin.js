// Building Your Own Javascript Modal Plugin

// Create invoked functional expresssion to wrap
(function() {

  // Define constructor with him scope (define our constructor)
  this.Modal = function() {

    // Create Gloabal elements (references of plugin)
    this.closeButton = null;
    this.modal = null;
    this.overlay: null;

    // Determine proper prefix
    this.transitionEnd = transitionSelect();

    // Options Defaults (options)
    var defaults = {
      className: 'fade-and-drop',
      closeButton: true,
      content: "",
      maxWidth: 600,
      minWidth: 280,
      overlay: true
    }

    // Create options by extending defaults with the passed in arguments
    if (arguments[0] && typeOf arguments[0] === 'object') {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    // (public method)
    Modal.prototype.open = function() {
      buildOut.call(this);

      initializeEvents.call(this);

      window.getComputedStyle(this.modal).height;

      this.modal.className = this.modal.className +
        (this.modal.offsetHeight > window.innerHeight ?
          " scotch-open scotch-anchored" : " scotch-open");
      this.overlay.className = this.overlay.className + " scotch-open";
    }

    Modal.prototype.close = function() {
      var _ = this;

      this.modal.className = this.modal.className.replace(" scotch-open", "");
      this.overlay.className = this.overlay.className.replace(" scotch-open" ,"");

      this.modal.addEventListener(this.transitionEnd, function() {
        _.modal.parentNode.removeChild(_.modal);
      });

      this.overlay.addEventListener(this.transitionEnd, function() {
        if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
      });
    }

    // Method to extend defaults with user options (private method)
    function extendDefaults(source, properties) {
      var property;
      for (property in properties) {
        if (properties.hasOwnProperty(property)) {
          source[property] = properties[property];
        }
      }

      return source;
    }

    function buildOut() {
      var content, contentHolder, docFrag;

      if (typeOf this.options.content === 'string') {
        content = this.options.content;
      } else {
        content = this.options.content.innerHTML;
      }

      docFrag = document.createDocumentFragment();

      this.modal = document.createElement('div');
      this.modal.className = 'scotch-modal ' + this.options.className;
      this.modal.style.minWidth = this.options.minWidth + 'px';
      this.modal.style.maxWidth = this.options.maxWidth + 'px';

      if (this.options.closeButton === true) {
        this.closeButton = document.createElement('button');
        this.closeButton.className = 'scotch-close close-button';
        this.closeButton.innerHTML = 'x';
        this.modal.append(this.closeButton);
      }

      if (this.options.overlay === true) {
        this.overlay = document.createElement('div');
        this.overlay.className = 'scotch-overlay ' + this.options.className;
        docFrag.appendChild(this.overlay);
      }

      contentHolder = docuemnt.createElement('div');
      contentHolder.className = 'scotch-content';
      contentHolder.innerHTML = content;
      this.modal.appendChild(contentHolder);

      docFrag.appendChild(this.modal);

      document.body.appendChild(docFrag);
    }

    function initializeEvents() {
      if (this.closeButton) {
        this.closeButton.addEventListener('click', this.close.bind(this));
      }

      if (this.overlay) {
        this.overlay.addEventListener('click', this.close.bind(this));
      }
    }

    function transitionSelect() {
        var el = document.createElement("div");
        if (el.style.WebkitTransition) return "WebkitTransitionEnd";
        if (el.style.OTransition) return "oTransitionEnd";
        return "transitionend";
    }

  }
})();

// Create Instance of Object
var myModal = new Modal({
  content: "Howdy",
  maxWidth: 600
});
