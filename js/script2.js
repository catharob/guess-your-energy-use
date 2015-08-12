$(document).ready(function(){

    $.ajax({
        dataType: "json",
        url: "https://spreadsheets.google.com/feeds/list/1bmZW4CyH390o5Fi4yydYZOPBZLnjc0tfx3EreKWKU1M/od6/public/basic?alt=json",
        success:function(data){
            var list = data;
            // console.log(list);
            var entry = data.feed.entry;
            console.log(entry);
            // var zip = data.feed.entry.title;
            // console.log(zip);


            $.each(entry, function(index,item){
                $('#container').append("<h2>"+ item.title.$t +"</h2><p>" + item.content.$t + "</p>");
                var zip = item.title.$t;
                console.log(zip);
                var vals = item.content.$t;
                var vals2 = vals.replace(/\s?\w+:\s/g,  "").split(",");
                console.log(vals2);
                $('#container').append("<div class='heatPerc' style='width:" + vals2[0] +"px'></div><div class='coolPerc' style='width:" + vals2[1] + "px'></div><br><br>");
            });



        }





    })
})