$(document).ready(function(){
    $('#myform').on('submit', function(e){
        e.preventDefault();
		
		var test = true;
		
		if($('#password').val() != $('#passwordconf').val()){
			test = false;
			$( "#password" ).addClass( "is-invalid" );
			$( "#passwordconf" ).addClass( "is-invalid" );
			$( "#password" ).removeClass( "is-valid" );
			$( "#passwordconf" ).removeClass( "is-valid" );
		}else{
			$( "#password" ).addClass( "is-valid" );
			$( "#passwordconf" ).addClass( "is-valid" );
			$( "#password" ).removeClass( "is-invalid" );
			$( "#passwordconf" ).removeClass( "is-invalid" );
		}
		
		if(!(new RegExp('[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}')).test($('#phone').val())){
			test = false;
			$( "#phone" ).addClass( "is-invalid" );
			$( "#phone" ).removeClass( "is-valid" );
		}else{
			$( "#phone" ).addClass( "is-valid" );
			$( "#phone" ).removeClass( "is-invalid" );
		}
		
		
		
		
		
		if(test){
			this.submit();
		}
		
    });
});