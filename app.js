
 
  $( document ).ready(function() {

    $(".items").hide();
      $(".status").hide();


    var myFacebookToken = 'EAACEdEose0cBAEwYKXtnQd0VxXXDfL05qoeunBt6cTn7K5YJHLhywF08xqH8raPOu2mizZACy30ZCaPVjYYTul0snjGmp9BnRxCNbyU1nNWnJItESCZAi6ZBbsSPWTUVXjzi2jbW4ohZBOqmvriEyaCUW76GmmPtGjZBdYZAqER7FD2dsEmV8U99WPEQ0VkNVDQf4ekooY9GgZDZD';

    function getFacebookInfo(){

        $.ajax(
 'https://graph.facebook.com/me?fields=picture.width(250).height(250),id,name,first_name,last_name,birthday,about,hometown,languages,gender,education,work,relationship_status,quotes,family,website,email,cover.width(815).height(320)&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#name").text(response.name);
if($("#picture img").length == 0){
                    $('#picture').append('<img src="'+response.picture.data.url+'">');
}



for( var i=0;i<response.languages.length;i++){
$("#lang").append(response.languages[i].name +",");

}



               $("#birthday").text(response.birthday);
                    $("#myHomeTown").text(response.hometown.name);
          $("#email").text(response.email);

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
  'https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,source},picture.width(250).height(250),cover,likes&access_token='+myFacebookToken
,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));

                    for( var i=0;i<response.posts.data.length;i++){
                        $("#story").append(response.posts.data[i].story +"<br> "+response.posts.data[i].created_time+'<li><img src="'+response.posts.data[i].full_picture+'" height="50%" width="200%" padding:0px 25px 0px 20px></li>'+"<br><br>");
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
