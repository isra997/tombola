$(function() {
	startRaffleAniamtion(3);

	$('#example1').click(function(){
		startRaffleAniamtion(1);
	});

	$('#example2').click(function(){
		startRaffleAniamtion(2);
	});

	$('#example3').click(function(){
		startRaffleAniamtion(3);
	});

	$('#toggleSpin').click(function(){
		$('#firstDrumHolder').raffleDrumAnimation('toggleSpin');
	});

	$('#startSpin').click(function(){
		$('#firstDrumHolder').raffleDrumAnimation('spin');
	});

	$('#stopSpin').click(function(){
		$('#firstDrumHolder').raffleDrumAnimation('stop');
	});

	$('#showResult').click(function(){
		$('#firstDrumHolder').raffleDrumAnimation('result');
	});

	$('#destroy').click(function(){
		$('#firstDrumHolder').raffleDrumAnimation('destroy');
	});
});

function startRaffleAniamtion(con){
	if(con == 1){
		$('#firstDrumHolder').raffleDrumAnimation(
			{
				itemImage:['raffledrumanimation/assets/ball_a_1.svg',
							'raffledrumanimation/assets/ball_a_2.svg',
							'raffledrumanimation/assets/ball_a_3.svg',
							'raffledrumanimation/assets/ball_a_4.svg',
							'raffledrumanimation/assets/ball_a_5.svg'],
				displayNumber:true,
				callback:raffleCallback
			}
		);
	}else if(con == 2){
		$('#firstDrumHolder').raffleDrumAnimation(
			{
				itemImage:['raffledrumanimation/assets/ball_b_1.svg',
							'raffledrumanimation/assets/ball_b_2.svg',
							'raffledrumanimation/assets/ball_b_3.svg',
							'raffledrumanimation/assets/ball_b_4.svg',
							'raffledrumanimation/assets/ball_b_5.svg'],

			}
		);
	}else if(con == 3){
		$('#firstDrumHolder').raffleDrumAnimation(
			{
				itemImage:['/assets/raffledrumanimation/assets/ticket4prueba.svg',
				'/assets/raffledrumanimation/assets/ticket4prueba.svg',
				'/assets/raffledrumanimation/assets/ticket4prueba.svg',
				'/assets/raffledrumanimation/assets/ticket4prueba.svg',
				'/assets/raffledrumanimation/assets/ticket4prueba.svg',],
				itemWidth:25
			}
		);
		console.log("ticket");
	}

	$('#firstDrumHolder').raffleDrumAnimation('spin');
}

function raffleCallback(data){
	console.log(data);
	switch(data.status) {
	  case 'spinstart':
		break;
	  case 'spinstop':
		break;
	  case 'result':
		console.log(ticketResult);
		break;
	  case 'resultcomplete':
		break;

	  default:

	}
}
