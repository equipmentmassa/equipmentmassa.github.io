jQuery('document').ready(function () {

   jQuery('input').on('keyup', function () {



      /*Круг*/
      var value1, value2, value3, value10, value11, value12, value13, value14, value15;
      value1 = jQuery('#val1').val();
      value2 = jQuery('#val2').val();
      value3 = value1 * value1 * value2 * 0.00000616225;

      jQuery('#rez').html(value3.toFixed(2));
      console.log(value3)

      /*Труба*/
      value10 = jQuery('#val10').val();
      value11 = jQuery('#val11').val();
      value12 = jQuery('#val12').val();

      value13 = value10 * value10 * value12 * 0.00000616225;
      value14 = value11 * value11 * value12 * 0.00000616225;
      value15 = value13 - value14;

      jQuery('#rez1').html(value15.toFixed(2));


      /*Лист*/
      var value20, value21, value22, value23;
      value20 = jQuery('#val20').val();
      value21 = jQuery('#val21').val();
      value22 = jQuery('#val22').val();

      value23 = value20 * value21 * value22 * 0.00000785;

      jQuery('#rez2').html(value23.toFixed(2));

      /*Шестигранник*/
      var value30, value31, value32;
      value30 = jQuery('#val30').val();
      value31 = jQuery('#val31').val();


      value32 = value30 * value30 * value31 * 0.0000067983;

      jQuery('#rez3').html(value32.toFixed(2));

   });

});