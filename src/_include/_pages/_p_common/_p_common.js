const initFunc = require('../../_modules/_m_javascript/_m_initFunc/_m_initFunc.js');
let $submitTaeget;

// const simpleModalSet = () => {
	
// 	let target = document.querySelectorAll('.c-simpleModal01Target');
// 	[].slice.call(target).forEach(function(event, i) {
// 		event.addEventListener("click", (e) => {
// 			e.preventDefault();
// 			document.getElementById(event.getAttribute('data-simplemodal-target')).classList.add("is-active")
			
// 			let close = event.getAttribute('data-simplemodal-target');
// 		}, false);
// 	});
	
// }


const scrollBar = () => {
	$(window).load(function(){
		$(".scrollBox01").mCustomScrollbar({
			scrollInertia: 200,
		});
	});
}

const headerClock = () => {
	setInterval(function(){
		var $time = new Date();
		var $h = $time.getHours();
		var $m = ('0'+$time.getMinutes()).slice(-2);
		var $clock = $h + ':' + $m;
		$('.clock').text($clock)
	},1000);
}

const submitMessage = () => {
	// 既読つける
	function readMessage(){
		setTimeout(function(){
			$('.is-submit .read').each(function() {
				if($(this).text() == '') {
					$(this).text('既読');
				}
			});
		},2000);
	}
	// コメント追加されたら最下部までスクロール
	function scrollBottm() {
		setTimeout(function(){
			$(".scrollBox01").mCustomScrollbar("scrollTo","bottom");
		},500);
	}



	$('.stampBtn').on('click',function(){
		$(this).toggleClass('is-active');
		$('.stampArea').slideToggle(200);
		$('.area.body').toggleClass('is-active');
	});

	$('.stampArea .stamp img').on('click',function(){
		var $time = new Date();
		var $h = $time.getHours();
		var $m = ('0'+$time.getMinutes()).slice(-2);
		var $stamp = $(this).attr('alt');
		if($stamp == 'グー') {
			var $text01 = 'ほな、注ぎます'
			var $count01 = $text01.length * 200;
			var $img01 = 'stamp06.png'
			var $img02 = 'stamp07.png'
			$('.scrollBox01 .inner').append('<p class="message is-submit"><span class="timeBlock"><span class="read"></span><span class="time">'+ $h + ':' + $m + '</span></span><span class="img stamp"><img src="images/stamp04.png"></span></p>');
			scrollBottm();
			readMessage();
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img01 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
			},2000 + 1000);
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img02 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
				scrollBottm();
			},2000 + 2000);
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
				scrollBottm();
			},2000 + 2000 + $count01);
		} else if($stamp == 'チョキ') {
			var $text01 = 'ほな、注ぎます'
			var $count01 = $text01.length * 200;
			var $img01 = 'stamp04.png'
			var $img02 = 'stamp07.png'
			$('.scrollBox01 .inner').append('<p class="message is-submit"><span class="timeBlock"><span class="read"></span><span class="time">'+ $h + ':' + $m + '</span></span><span class="img stamp"><img src="images/stamp05.png"></span></p>');
			scrollBottm();
			readMessage();
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img01 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
			},2000 + 1000);
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img02 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
				scrollBottm();
			},2000 + 2000);
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
				scrollBottm();
			},2000 + 2000 + $count01);
		} else if($stamp == 'パー') {
			var $text01 = 'ほな、注ぎます'
			var $count01 = $text01.length * 200;
			var $img01 = 'stamp05.png'
			var $img02 = 'stamp07.png'
			$('.scrollBox01 .inner').append('<p class="message is-submit"><span class="timeBlock"><span class="read"></span><span class="time">'+ $h + ':' + $m + '</span></span><span class="img stamp"><img src="images/stamp06.png"></span></p>');
			scrollBottm();
			readMessage();
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img01 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
			},2000 + 1000);
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img02 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
				scrollBottm();
			},2000 + 2000);
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
				scrollBottm();
			},2000 + 2000 + $count01);
		} else if($stamp == 'どこ') {
			var $text01 = 'いま、シンガポールにいます。'
			var $count01 = $text01.length * 200;
			var $text02 = 'この国を南北に縦断する地下鉄を、私は作っています。'
			var $count02 = $text02.length * 200;
			$('.scrollBox01 .inner').append('<p class="message is-submit"><span class="timeBlock"><span class="read"></span><span class="time">'+ $h + ':' + $m + '</span></span><span class="img stamp"><img src="images/stamp02.png"></span></p>');
			scrollBottm();
			readMessage();
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
				scrollBottm();
			},2000 + $count01);
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text02 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
				scrollBottm();
			},2000 + $count01 + $count02 );
			setTimeout(function(){
				$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/stamp01.png"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
				scrollBottm();
			},2000  + $count01 + $count02 + 1000);
		}
	});

	$('#text').on('keydown',function (e) {
		var $input = $('#text').val();
		var $submit = $input.replace(/(\n|\r)/g, "<br />");
		if ($submit !== '' && !$('#submit').length) {
			$('.col.mike').hide();
			$('.col.input').after('<div class="col submit" id="submit"></div>');
		} else {

		}
		if(event.shiftKey){
			if(e.keyCode !== 13 || ( e.keyCode === 13 && (e.shiftKey === true || e.ctrlKey === true || e.altKey === true) )){
				
			}
		} else {
			$submitTaeget = $('#submit');
			if ($submit !== '') {
				$submitTaeget.on('click',function () {
					var $time = new Date();
					var $h = $time.getHours();
					var $m = ('0'+$time.getMinutes()).slice(-2);
					var $input = $('#text').val();
					var $submit = $input.replace(/(\n|\r)/g, "<br />");


					
					
					if ($submit !== '') {
						$('.scrollBox01 .inner').append('<p class="message is-submit"><span class="timeBlock"><span class="read"></span><span class="time">'+ $h + ':' + $m + '</span></span><span class="text">' + $submit + '</span></p>');
						$('#text').val('');
						scrollBottm();
						if ($submit.match('どこ|同級会') ) {
							var $text01 = 'いま、シンガポールにいます。'
							var $count01 = $text01.length * 200;
							var $text02 = 'この国を南北に縦断する地下鉄を、私は作っています。'
							var $count02 = $text02.length * 200;
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count01);
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text02 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count01 + $count02 );
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/stamp01.png"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000  + $count01 + $count02 + 1000);
						} else if ($submit.match('正解は') ) {
							var $text01 = '越○製菓'
							var $count01 = $text01.length * 300;
							var $img01 = 'stamp03.png'
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
							},2000 + $count01);
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img"><img src="images/'+ $img01 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count01 + 1000);
						} else if ($submit.match('おじさん|オジサン') ) {
							var $ojisan = [
								'コンバンハ✋😅<br>もう、寝ちゃったかな⁉️<br>おじさんは、これから❗️布団に入ります。(^_^)<br>今日は、仕事が忙しかったから、クタクタだよ😱',
								'久しぶり😃☀ (^_^)😃✋😆<br>そういえば、昨日は例の中華🍜に行ってきたよ。<br>結構いい雰囲気だったから、オススメだヨ😚',
								'会社をサボるなんて、悪い子だなぁ😍😆❗ﾅﾝﾁｬｯﾃ😃✋<br>早く会いたいな😃☀ 😘',
								'髪の毛、切ったのかな😜⁉️🤔<br>似合いすぎだヨ(^_^)😚<br>可愛すぎて小生お仕事に集中できなくなっちゃいそうだよ💔(・_・;どうしてくれるンダ😃♥',
								'早く会いたいナ💗',
								'愛しいなぁもウ😃☀ <br>おじさん、本当にお姫様かと思っちゃったよ😄😃☀ 😘(^з<)❗😃',
								'久しぶり😃☀ (^o^)😃❗<br>今日も素敵な1日に、なりますよウニ😃✋(^o^)❗',
								'そっちも晴れなのかな❓<br>本日のランチ🍴は奮発してピッツァ🍕付き(^з<)😍💗(^o^)😄<br>誰だメタボなんて言ったやつハ💔(◎ ＿◎;)💦(T_T)',
								'ヤッホー💕元気かな（￣ー￣?）🤔❗❓❗❓<br>今日は大雨だけどなにするのカナ❓✋❓<br>よく頑張ったね😍💗💕(^o^)えらいえらい😃✋',
								'ｵｼﾞｻﾝ明日も仕事だけどなかなか寝れないよ〜(^▽^;)<br>早く会いたイヨ(￣Д￣；；ナンチャッテ😃😄(^з<)😚<br>風邪ひかないようにね😄',
								'オハヨウ〜(^o^)😆<br>出張で岐阜に行ってきたよ😚(^_^)😃♥<br>観光でも、行きたいなぁ😚モチロン、一緒にネ😆💗',
								'突然だけど、イタリアン🍝好きカナ❓🤔❗❓日曜日ご飯行こうよ(^з<)😃✋💗😃',
								'今日はよく休んでね💤🤑(＃￣З￣)今日も大変だったんだね😱💦',
								'オッハー(^_^)たまにはオレにも連絡ほしいナ💕(^_^)😚<br>ゆっくり、身体休めてね😍😘😃オヤスミナサイ(＃￣З￣)(^^;;',
								'おはよー！チュッ😃♥ 😘今日はどんな一日だった🤔<br>天気悪いと気分もよくないよね(・_・;^^;(￣Д￣；；😱<br>じゃあ今日は会社休んでおじさんとカラオケ🎤しよウ(^_^)'
							]
							var $randTxt = $ojisan[Math.floor(Math.random() * $ojisan.length)];
							var $count = $randTxt.length * 200;
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $randTxt +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count);

						} else if ($submit.match('蜜です|コロナ|小池|ソーシャルディスタンス|Social Distance|social distance') ) {
							var $text01 = 'Social Distance'
							var $count01 = $text01.length * 300;
							var $img01 = 'stamp08.png'
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img"><img src="images/'+ $img01 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
							},2000 + $count01 - 500);
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count01);
						} else if ($submit.match('インド|アラジン|ジーニー|ホール・ニュー・ワールド|A Whole New World') ) {
							var $link01 = 'https://www.youtube.com/watch?v=xPF9XvNYhNw'
							var $text01 = 'インドがわからない'
							var $count01 = $text01.length * 300;
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'<br><a href="'+ $link01 +'" target="_blank">'+ $link01 +'</a></span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count01);
						} else if ($submit.match('ドミニカ|国旗|キャッサバ|あっというまに|あっという間に|トップ・オブ・ザ・ワールド|Top of the World') ) {
							var $link01 = 'https://www.youtube.com/watch?v=Ki8is7nGFS4'
							var $text01 = '国旗の描き方'
							var $count01 = $text01.length * 300;
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'<br><a href="'+ $link01 +'" target="_blank">'+ $link01 +'</a></span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count01);
						} else if ($submit.match('おはよ|おきた|起きた|朝') ) {
							var $morning = [
								'おはよう！',
								'おはよー！！！！！起きて！！！！！！！！朝だよ！！！！！！すごい朝！！！！外が明るい！！！！！カンカンカンカンカンカンカンカンカンカンカンカン！！！！！おはよ！！！！！！！！！見て見て！！！！外明るいの！！！外！！！！見て！！！！カンカンカン！！！',
								'おはよ！',
								'おはよ〜〜！',
								'おはようございます',
							]
							var $randTxt = $morning[Math.floor(Math.random() * $morning.length)];
							var $count = $randTxt.length * 200;
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $randTxt +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count);
						} else if ($submit.match('こんにちは|こんにちわ|昼') ) {
							var $noon = [
								'こんにちは！',
								'お昼ご飯たべた？',
								'こんにちは〜'
							]
							var $randTxt = $noon[Math.floor(Math.random() * $noon.length)];
							var $count = $randTxt.length * 200;
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $randTxt +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count);
						} else if ($submit.match('こんばんわ|こんばんは|夜') ) {
							var $night = [
								'こんばんは！',
								'こんばんわ〜',
								'今日の晩ご飯なにかな〜',
							]
							var $randTxt = $night[Math.floor(Math.random() * $night.length)];
							var $count = $randTxt.length * 200;
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $randTxt +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count);
						} else if ($submit.match('シンガポール|マーライオン|時差') ) {
							var $text01 = '日本との時差は約１時間です'
							var $count01 = $text01.length * 300;
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count01);
						} else if ($submit.match('グー|ぐー') ) {
							var $text01 = 'ほな、注ぎます'
							var $count01 = $text01.length * 200;
							var $img01 = 'stamp06.png'
							var $img02 = 'stamp07.png'
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img01 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
							},2000 + 1000);
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img02 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + 2000);
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + 2000 + $count01);
							
						} else if ($submit.match('チョキ|ちょき') ) {
							var $text01 = 'ほな、注ぎます'
							var $count01 = $text01.length * 200;
							var $img01 = 'stamp04.png'
							var $img02 = 'stamp07.png'
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img01 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
							},2000 + 1000);
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img02 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + 2000);
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + 2000 + $count01);
						} else if ($submit.match('パー|ぱー') ) {
							var $text01 = 'ほな、注ぎます'
							var $count01 = $text01.length * 200;
							var $img01 = 'stamp05.png'
							var $img02 = 'stamp07.png'
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img01 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
							},2000 + 1000);
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img stamp"><img src="images/'+ $img02 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + 2000);
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + 2000 + $count01);
						} 
						// else if ($submit.match('クララ') ) {
						// 	var $text01 = 'エメット〜〜〜！'
						// 	var $count01 = $text01.length * 300;
						// 	var $img01 = 'Clara.jpg'
						// 	readMessage();
						// 	setTimeout(function(){
						// 		$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
						// 	},2000 + $count01);
						// 	setTimeout(function(){
						// 		$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img"><img src="images/'+ $img01 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
						// 		scrollBottm();
						// 	},2000 + $count01 + 1000);
						// } else if ($submit.match('エメット') ) {
						// 	var $text01 = 'クララ〜〜〜！'
						// 	var $count01 = $text01.length * 300;
						// 	var $img01 = 'Emmett.jpg'
						// 	readMessage();
						// 	setTimeout(function(){
						// 		$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
						// 	},2000 + $count01);
						// 	setTimeout(function(){
						// 		$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img"><img src="images/'+ $img01 +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
						// 		scrollBottm();
						// 	},2000 + $count01 + 1000);
						// } else if ($submit.match('トニー|アイアンマン|3000回愛してる|I love you 3000|I LOVE YOU 3000|スターク') ) {
						// 	var $ironman = [
						// 		'ironman01.jpg',
						// 		'ironman02.jpg',
						// 		'ironman03.jpg',
						// 		'ironman04.jpg',
						// 		'ironman05.jpg',
						// 		'ironman06.jpg',
						// 		'ironman07.jpg',
						// 		'ironman08.jpg',
						// 	]
						// 	var $randImg = $ironman[Math.floor(Math.random() * $ironman.length)];
						// 	readMessage();
						// 	setTimeout(function(){
						// 		$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img"><img src="images/'+ $randImg +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
						// 		scrollBottm();
						// 	},2000 + 1000);
						// } else if ($submit.match('キャップ|スティーブ|ロジャース|キャプテン|キャプテンアメリカ|キャプテン・アメリカ|キャプテン アメリカ') ) {
						// 	var $captain = [
						// 		'captain01.jpg',
						// 		'captain02.jpg',
						// 		'captain03.jpg',
						// 		'captain04.jpg',
						// 		'captain05.jpg',
						// 		'captain06.jpg',
						// 		'captain07.jpg',
						// 		'captain08.jpg',
						// 		'captain09.jpg',
						// 	]
						// 	var $randImg = $captain[Math.floor(Math.random() * $captain.length)];
						// 	readMessage();
						// 	setTimeout(function(){
						// 		$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img"><img src="images/'+ $randImg +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
						// 		scrollBottm();
						// 	},2000 + 1000);
						// } else if ($submit.match('ソー|ムジョルニア|アスガルド') ) {
						// 	var $thor = [
						// 		'thor01.jpg',
						// 		'thor02.jpg',
						// 		'thor03.jpg',
						// 		'thor04.jpg',
						// 		'thor05.jpg',
						// 		'thor06.jpg',
						// 		'thor07.jpg',
						// 		'thor08.jpg',
						// 		'thor09.jpg',
						// 	]
						// 	var $randImg = $thor[Math.floor(Math.random() * $thor.length)];
						// 	readMessage();
						// 	setTimeout(function(){
						// 		$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img"><img src="images/'+ $randImg +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
						// 		scrollBottm();
						// 	},2000 + 1000);
						// } else if ($submit.match('MARVEL|マーベル|MCU') ) {
						// 	var $thor = [
						// 		'ironman01.jpg',
						// 		'ironman02.jpg',
						// 		'ironman03.jpg',
						// 		'ironman04.jpg',
						// 		'ironman05.jpg',
						// 		'ironman06.jpg',
						// 		'ironman07.jpg',
						// 		'ironman08.jpg',
						// 		'captain01.jpg',
						// 		'captain02.jpg',
						// 		'captain03.jpg',
						// 		'captain04.jpg',
						// 		'captain05.jpg',
						// 		'captain06.jpg',
						// 		'captain07.jpg',
						// 		'captain08.jpg',
						// 		'captain09.jpg',
						// 		'thor01.jpg',
						// 		'thor02.jpg',
						// 		'thor03.jpg',
						// 		'thor04.jpg',
						// 		'thor05.jpg',
						// 		'thor06.jpg',
						// 		'thor07.jpg',
						// 		'thor08.jpg',
						// 		'thor09.jpg',
						// 	]
						// 	var $randImg = $thor[Math.floor(Math.random() * $thor.length)];
						// 	readMessage();
						// 	setTimeout(function(){
						// 		$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="img"><img src="images/'+ $randImg +'"></span><span class="time">'+ $h + ':' + $m + '</span></p>');
						// 		scrollBottm();
						// 	},2000 + 1000);
						// } 
						
					}
					$('.col.mike').show();
					$('.col.submit').remove(); 
				});	
			} else if( $submit !== '' && $('#submit').length === 1) {

			} else {
				$('.col.mike').show();
				$('.col.submit').remove(); 
			}
		}
	});
	
	
}



const inputFocus = () => {
	$('.col.input').css('transition','0.3s');
	$('#text').on('focus', function(){
		$('.col.plus,.col.camera,.col.graphic').hide();
		$('.col.input').before('<div class="col arrow"></div>');
		$('.col.input').css('width','80%');
		$('#text').attr('placeholder','メッセージを入力');
		$('#text').parents('.col.input').addClass('is-active');
		
	}).on('blur', function(){
		$('.col.arrow').remove(); 
		$('.col.plus,.col.camera,.col.graphic').show();
		$('.col.input').css('width','auto');
		$('#text').attr('placeholder','Aa');
		$('#text').parents('.col.input').removeClass('is-active');
	});
}


// init
class initSet {
	DOMReadBefore(op) {
	}
	DOMReadAfter(op) {
		// simpleModalSet();
		scrollBar();
		
		headerClock();
		submitMessage();
		inputFocus();
	}
	imageReadAfter(op) {
	}
	windowResize(op) {
	}
	windowScroll(op) {
	}
}

module.exports = (option) => {
	let init = new initSet();
	initFunc(init, option);
}