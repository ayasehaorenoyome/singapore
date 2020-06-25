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
		$(".scrollBox01").mCustomScrollbar();
		if ($(ele).data('method') == 'panel_workroom') {
			//上のsettopで底までいかなかった場合一瞬settopの位置を表示した後、底まで行く
			$('.mCustomScrollbar').mCustomScrollbar('scrollTo', 'bottom',{
				scrollInertia:0
			}
		);
        }
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
	$('#text').on('keydown',function (e) {
		var $submit = $('#text').val();
		if ( e.which === 13 || e.which === 8) {
			if ($submit !== '' && !$('#submit').length) {
				$('.col.mike').hide();
				$('.col.input').after('<div class="col submit" id="submit"></div>');
				$submitTaeget = $('#submit');
				$submitTaeget.on('click',function () {
					var $time = new Date();
					var $h = $time.getHours();
					var $m = ('0'+$time.getMinutes()).slice(-2);
					var $submit = $('#text').val();
					
					function readMessage(){
						setTimeout(function(){
							$('.is-submit .read').each(function() {
								if($(this).text() == '') {
									$(this).text('既読');
								}
							});
						},2000);
					}
					function scrollBottm() {
						$(".scrollBox01").mCustomScrollbar("scrollTo","bottom");
					}
					
					if ($submit !== '') {
						$('.scrollBox01 .inner').append('<p class="message is-submit"><span class="timeBlock"><span class="read"></span><span class="time">'+ $h + ':' + $m + '</span></span><span class="text">' + $submit + '</span></p>');
						$('#text').val('');
						scrollBottm();
						if ($submit.match('どこ|同級会') ) {
							var $text01 = 'いま、シンガポールにいます。'
							var $count01 = $text01.length * 300;
							var $text02 = 'この国を南北に縦断する地下鉄を、私は作っています。'
							var $count02 = $text02.length * 300;
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count01);
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text02 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
							},2000 + $count01 + $count02 );
						} else if ($submit.match('正解は') ) {
							var $text01 = '越後製菓'
							var $count01 = $text01.length * 300;
							var $img01 = 'echigo.jpg'
							readMessage();
							setTimeout(function(){
								$('.scrollBox01 .inner').append('<p class="message is-bot"><span class="icon"></span><span class="text">'+ $text01 +'</span><span class="time">'+ $h + ':' + $m + '</span></p>');
								scrollBottm();
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

						}
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
		
	}).on('blur', function(){
		$('.col.arrow').remove(); 
		$('.col.plus,.col.camera,.col.graphic').show();
		$('.col.input').css('width','auto');
		$('#text').attr('placeholder','Aa');
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