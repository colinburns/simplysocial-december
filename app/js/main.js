jQuery(document).ready(function($) {

  // When we are on the settings page and we need to get back to
  // index.html and the profile we need to load it via ajax after
  // the page has loaded.
  var QueryString = function () {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
  }();

  var getAction = QueryString.p;

  if (getAction == 'profile-feed') {
    var Page = "profile";
    var ProfileLink = "../profile.html";
    var ActionLink = "../profile-feed.html";
    loadPage(Page, ProfileLink, ActionLink);
  } else if (getAction == 'profile-followers') {
    var Page = "followers";
    var ProfileLink = "../profile.html";
    var ActionLink = "../profile-followers.html";
    loadPage(Page, ProfileLink, ActionLink);
  } else if (getAction == 'profile-following') {
    var Page = "following";
    var ProfileLink = "../profile.html";
    var ActionLink = "../profile-following.html";
    loadPage(Page, ProfileLink, ActionLink);
  }

  $(document).on("click", ".load-full-page", function(e) {
    e.preventDefault();
    var Page = $(this).data('display');
    var ProfileLink = $(this).data('secondary-link');
    var ActionLink = $(this).attr('href');
    loadPage(Page, ProfileLink, ActionLink);
  });

  function loadPage(Page, ProfileLink, ActionLink) {
    // When you click on the Profile menu item in the top navigation
    // we need to make 2 ajax calls
    // 1. First to replace the header section of the page
    // 2. Second to replace the content section

    $.ajax({
      url: ProfileLink,
      cache: false
    })
    .done(function( html ) {
      $( "#VerticalStatusContainer" ).html( html );

      // Depending on the page we are landing on we might need
      // to update the the active link
      $('.profile-navigation-personal').removeClass('active');
      if(Page == 'profile'){
        $('.profile-feed').addClass('active');
      }else if(Page == 'followers'){
        $('.profile-followers').addClass('active');
      }else if(Page == 'following'){
        $('.profile-following').addClass('active');
      }
    });

    $.ajax({
      url: ActionLink,
      cache: false
    })
    .done(function( html ) {
      $( "#ContentContainer" ).removeClass('layout-grid').addClass('layout-list').html( html );
    });
  }

  $(document).on("click", ".display-style-navigation", function(e) {
    e.preventDefault();
    // This function is change the layout style from list to grid
    $('.display-style-navigation').removeClass('active');
    $(this).addClass('active');
    var DisplayStyle = $(this).data('link');
    if(DisplayStyle == 'layout-grid'){
      $('#ContentContainer').removeClass('layout-list');
      $('#ContentContainer').removeClass('layout-grid');
      $('#ContentContainer').addClass(DisplayStyle);
      $('.layout-grid').masonry({
        columnWidth: '.item-container',
        itemSelector: '.item-container'
      });
    }else{
      location.reload();
    }
  });

  $(document).on("click", ".expand-replies", function(e) {
    e.preventDefault();
    $(this).html('Collapse <i class="fa fa-caret-up"></i>');
    $(this).removeClass('expand-replies');
    $(this).addClass('collapse-replies');
    $('.item-controls.has-replies').hide();
    $('.reply-container').slideDown("slow", function(){
      $('.layout-grid').masonry({
        columnWidth: '.item-container',
        itemSelector: '.item-container'
      });
    });
  });

  $(document).on("click", ".collapse-replies", function(e) {
    e.preventDefault();
    $(this).html('Expand <i class="fa fa-caret-down"></i>');
    $(this).addClass('expand-replies');
    $(this).removeClass('collapse-replies');
    $('.item-controls.has-replies').show();
    $('.reply-container').slideUp("slow", function(){
      $('.layout-grid').masonry({
        columnWidth: '.item-container',
        itemSelector: '.item-container'
      });
    });
  });

  $(document).on("click", ".display-all-posts", function(e) {
    e.preventDefault();
    $('.item-container').show();
    $('.profile-navigation').removeClass('active');
    $(this).addClass('active');
    $('.layout-grid').masonry({
      columnWidth: '.item-container',
      itemSelector: '.item-container'
    });
  });

  $(document).on("click", ".display-photos", function(e) {
    e.preventDefault();
    $('.item-container').hide();
    $('.item-container.photo-container').show();
    $('.profile-navigation').removeClass('active');
    $(this).addClass('active');
    $('.layout-grid').masonry({
      columnWidth: '.item-container',
      itemSelector: '.item-container'
    });
  });

  $(document).on("click", ".display-videos", function(e) {
    e.preventDefault();
    $('.item-container').hide();
    $('.item-container.video-container').show();
    $('.profile-navigation').removeClass('active');
    $(this).addClass('active');
    $('.layout-grid').masonry({
      columnWidth: '.item-container',
      itemSelector: '.item-container'
    });
  });

  // Modal window popup
  $(function(){
  	$("#ModalLauncher,#ModalBackground,#ModalClose").click(function () {
  		$("#ModalContent,#ModalBackground").toggleClass("active");
  	});
  });

  $(function(){
  	$(".modal-lightbox-launcher,#ModalLightboxBackground,#ModalLightboxClose").click(function () {
  		$("#ModelLightbox,#ModalLightboxBackground").toggleClass("active");
  	});
  });

});
