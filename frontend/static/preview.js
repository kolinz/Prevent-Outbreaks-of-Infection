$(function(){
                $('#File').change(function(){
                        $('img').remove();
                                var file = $(this).prop('files')[0];
                                var reader = new FileReader();
                                reader.onloadend = function(){
                                        $('#preview').html('<img src="' + reader.result + '" width="340px"/>');
                                }
                                reader.readAsDataURL(file);
                });
});
