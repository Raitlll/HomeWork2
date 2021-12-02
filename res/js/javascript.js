$(document).ready(function () {
    $.get("res/json/json.json", function (posts) {
            let section = $('<section class = "section">')
            var objcount= posts.post.length;
            var profilePic = "<img src='/res/images/profilepic.jpg'>";
            for (var x = 0;x<objcount;x++){
                var item = posts.post[x];
                console.log(item);
                let postbox = $('<div class= "postBox">');
                let postHeader = $('<div class="postHeader">')
                let postDesc = $('<div class="postDesc">')
                let date = $('<p>').text(item.date);
                let body = $('<p>').text(item.description);
                let img = $('<img>').attr("src",item.image)
                $('body').append(section);
                $('section').append(postbox);
                postbox.append(postHeader);
                postbox.append(postDesc);
                postHeader.append(date);
                postHeader.append(profilePic);
                postDesc.append(img);
                postDesc.append(body);
            }


        })
    $('#profileView').click(function (){
        $('.profileView').toggleClass('visible')
    })

})