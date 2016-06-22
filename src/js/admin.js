var beautify_html = require('js-beautify').html;

$('#save').on('click', function(e){
    e.preventDefault();

    var content = $('iframe#site').contents().find(".main");

    content.find('section').each(function(){
        var section = $(this);
        section.find('img.unvisible-image').remove();
        section.find('form.change-bg-form').remove();
        section.find('form.loader').remove();
        section.find('.editable').removeAttr('contenteditable');
        if(section.find('.google-map').html()){
            section.find('.google-map').remove();
            section.prepend($('<div>').addClass('google-map').attr('id', 'googlemaps'));
        }
        if(section.find('.mce-resizehandle').html()){
            section.find('.mce-resizehandle').remove();
        }
        if(section.find('.article').html()){
            section.find('.article').removeClass('owl-carousel owl-theme');
            section.find('.article').removeAttr('style');
            section.find('.article').html("{{articles}}");
        }
        if(section.find('.slider--desktop').html()){
            section.find('.slider--desktop').html("{{slider}}");
        }
    });

    var beautyContent = beautify_html(content.html());

    $.ajax({
        method: 'POST',
        url: 'save.php',
        data: {content: beautyContent},
        success: function(response){
            console.log(response);
        }
    });
});

$('#create-article').on('click', function(e){
    e.preventDefault();

    var title = $('#article-title').val(),
        slug = slugify(title);

    var params = [
        'height='+screen.height,
        'width='+screen.width,
        'left=0',
        'top=0',
        'fullscreen=yes' // only works in IE, but here for completeness
    ].join(',');

    window.open("create-article.php?slug="+slug+"&title="+title, "_blank", params);
    $('#createArticleModal').modal('hide');
});

$('#save-article').on('click', function(e){
    e.preventDefault();

    var content = $('iframe#site').contents().find(".main");

    content.find('.article--detail__back-link').html($('<i>').addClass('fa fa-angle-left'));
    content.find('.article--detail__back-link').append(' Back');
    content.find('.editable').removeAttr('contenteditable');

    var title = content.find('.article--detail__title').text(),
        slug = $('#slug').val(),
        img = content.find('.article--detail__image img').attr('src'),
        date = content.find('.article--detail__meta .date').text(),
        excerpt = content.find('.article--detail__text').html();

    var beautyContent = beautify_html(content.html());

    $.ajax({
        method: 'POST',
        url: 'save-article.php',
        data: {title: title, slug: slug, img: img, date: date, excerpt: excerpt, content: beautyContent},
        success: function(response){
            console.log(response);
        }
    });
});

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}