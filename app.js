
  $( document ).ready(function() {

    $(".items").hide();
      $(".status").hide();


    var myFacebookToken = 'EAACEdEose0cBAGSmyzv4fcUAfjNx8lY0ONk3NaPs1XkPLQulVwLXJ44q16ZBykK8SsYlqxp9ldi9SN3MoUrkKxJZA8FVNoI2I3p0wn9xKy3FI19Ocw3dSWFxV4Dd5x8v2ZAKSmd8X7sx9mi8tZAxlZAo0lDL4E5qAzYU2DZA9zybtFUVCBykoIREBRBj6zZC7IZD';

    function getFacebookInfo(){

        $.ajax(
 'https://graph.facebook.com/v2.12/me?fields=name%2Cbirthday%2Chometown%2Clanguages%2Cposts&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#name").text(response.name);
for( var i=0;i<response.languages.length;i++){



if(i<=response.languages.length){
$("#lang").append(response.languages[i].name +",");

}}



               $("#birthday").text(response.birthday);
                    $("#myHomeTown").text(response.hometown.name);


                },
                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },



                beforeSend:function(){

                },

                complete:function(){

$(".items").show();
$(".status").hide();

                }
            }



        );// end ajax call


    }
    function getFacebookStatusInfo(){

        $.ajax(
  'https://graph.facebook.com/v2.12/me?fields=name%2Cbirthday%2Chometown%2Clanguages%2Cposts&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));

                    for( var i=0;i<response.posts.data.length;i++){
                        $("#story").append(response.posts.data[i].story +"<br> "+response.posts.data[i].created_time+"<br><br>");
                    }
                  },
  error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },



                beforeSend:function(){

                },

                complete:function(){
  $(".status").show();
  $(".items").hide();

                }
            }



        );// end ajax call


    }

    $("#status").click(function(){



 return getFacebookStatusInfo();


      });


    $("#profile").click(function(){



 return getFacebookInfo();


      });



  });
