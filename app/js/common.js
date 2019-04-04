$(document).ready(function(){
	$('#share-block').hide();
	$('.answers').click(function() {
		$('#share-block').show();
	});
});


(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||
[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)
[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")
    ym(52512361, "init", {
        id:52512361,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        ut:"noindex"
});


var app = new Vue({
	el: '#content',
	data: {
		message: '',
		groupGood: null,
		dots: [
				{
					isActive: true,
					value: 1
				},
				{
					isActive: false,
					value: 2
				},
				{
					isActive: false,
					value: 3
				},
				{
					isActive: false,
					value: 4
				},
				{
					isActive: false,
					value: 5
				}
			],
		isStart: true,
		group: null,
		goods: null,
		goodActive: false,
		isShare: false,
		answers: 
		[
			{
				img: 'img/q/1/1.png',
				text: 'Баня',
				goods: 0,
				value : 1,
				isActive: true,	
			},
			{
				img: 'img/q/1/3.png',
				text: 'Домашний отдых',
				goods: 0,
				value : 1,
				isActive: true,
			},
			{
				img: 'img/q/1/2.png',
				text: 'Тусовка с друзьями',
				goods: 0,
				value : 1,
				isActive: true,
			},
			{
				img: 'img/q/1/4.png',
				text: 'Рыбалка в Европе',
				goods: 0,
				value : 1,
				isActive: true,
			},
			{
				img: 'img/q/2/4.png',
				text: 'Радар (оригинальный сигнал), люблю old school ',
				goods: 0,
				value : 2,
				isActive: false,
			},
			{
				img: 'img/q/2/3.png',
				text: 'Звуки природы. Пение птиц - самое то',
				goods: 0,
				value : 2,
				isActive: false,
			},
			{
				img: 'img/q/2/2.png',
				text: 'Heavy metal. Чтобы меня разбудить, нужно постараться. ',
				goods: 0,
				value : 2,
				isActive: false,
			},
			{
				img: 'img/q/2/1.png',
				text: 'Все и сразу, будильник на каждую минуту. Утро - не мое время..',
				goods: 0,
				value : 2,
				isActive: false,
			},
			{
				img: 'img/q/3/1.png',
				text: 'Гладко',
				goods: 0,
				value : 3,
				isActive: false,
			},
			{
				img: 'img/q/3/2.png',
				text: 'Усы как у Дали',
				goods: 0,
				value : 3,
				isActive: false,
			},
			{
				img: 'img/q/3/3.png',
				text: 'Легкая щетина',
				goods: 0,
				value : 3,
				isActive: false,
			},
			{
				img: 'img/q/3/4.png',
				text: 'Я не брился',
				goods: 0,
				value : 3,
				isActive: false,
			},
			{
				img: 'img/q/4/1.png',
				text: 'Еще одна катка и поем',
				group: 'Игрок',
				goods: 0,
				value : 4,
				isActive: false,
			},
			{
				img: 'img/q/4/2.png',
				text: 'Сварю сосиски, может пельмени',
				group: 'Зритель',
				goods: 0,
				value : 4,
				isActive: false,
			},
			{
				img: 'img/q/4/3.png',
				text: 'Пожалуй, стейк, я гурман',
				group: 'Изысканный',
				goods: 0,
				value : 4,
				isActive: false,
			},
			{
				img: 'img/q/4/4.png',
				text: 'Грудку сварю, мб салат овощной',
				group: 'Активный',
				goods: 0,
				value : 4,
				isActive: false,
			},
		],
		answerText: [
			{
				text: 'На что похоже твоё 23 февраля?',
				value: 1,
				isActive: true,
			},
			{
				text: 'Не важно во сколько ты проснулся, день то твой! Кстати, какая музыка стоит у тебя на будильнике?',
				value: 2,
				isActive: false,
			},
			{
				text: 'Как ты побрился в этот день?',
				value: 3,
				isActive: false,
			},
			{
				text: 'Что будет на твоём праздничном столе в этот день?',
				value: 4,
				isActive: false,
			},
		],
		answerGroupText: 
			{
				isActive: false,
				text: 'Какие носки ты хотел бы получить в подарок?'
			},
		answersGroups: [
			{
				// group: 1,
				text: 'Чёрные. Я все ещё люблю классику',
				goods: 1,
				img: 'img/q/5/1/1.png',
				isActive: false,
			},
			{
				// group: 1,
				text: 'Белые адидас. Спорт в массы',
				goods: 2,
				img: 'img/q/5/1/2.png',
				isActive: false,
			},
			{
				// group: 1,
				text: 'Яркие, с единорогами. В носках я эксцентричен',
				goods: 1,
				img: 'img/q/5/1/3.png',
				isActive: false,
			},
			{
				// group: 1,
				text: 'Шерстяные. Главное тепло, 23 февраля - это ещё зима',
				goods: 2,
				img: 'img/q/5/1/4.png',
				isActive: false,
			},

		],
		good: [
			{
				value: 1,
				group: 'Изысканный',
				img: 'img/r/1.png',
				isActive: false,
				headerText: 'Macbook',
				text: 'Тонкий. Изящный. Желанный. Как и мое поздравление. Будь счастлив, с 23!  '
			},
			{
				value: 2,
				group: 'Изысканный',
				img: 'img/r/2.png',
				isActive: false,
				headerText: 'Айфон',
				text: 'Желаю тебе столько денег, чтобы можно было обновлять айфоны с каждым апгрейдом!'
			},
			{
				value: 1,
				group: 'Активный',
				img: 'img/r/8.png',
				isActive: false,
				headerText: 'Колонка GBL',
				text: 'Музыка – твой катализатор, пусть в этот день любимые треки звучат везде, а я помогу в этом.'
			},
			{
				value: 2,
				group: 'Активный',
				img: 'img/r/4.png',
				isActive: false,
				headerText: 'Браслет mi-band',
				text: 'Хоть в зале ты и бываешь чаще, чем дома. Пусть тренировки остаются такими же продуктивными, а спорт будет в каждом движении'
			},
			{
				value: 1,
				group: 'Игрок',
				img: 'img/r/5.png',
				isActive: false,
				headerText: 'PSP',
				text: 'Жизнь как игра! Знакомо? Побольше тебе fatality, да посочнее, а пусть х-ray накапливаются за секунду!'
			},
			{
				value: 2,
				group: 'Игрок',
				img: 'img/r/5.png',
				isActive: false,
				headerText: 'PSP',
				text: 'Жизнь как игра! Знакомо? Побольше тебе fatality, да посочнее, а пусть х-ray накапливаются за секунду!'
			},
			{
				value: 1,
				group: 'Зритель',
				img: 'img/r/6.png',
				isActive: false,
				headerText: 'Телевизор',
				text: 'Хороших фильмов тебе, дружок, да без азино и 1хБет. Только качественное кино, что еще нужно!? '
			},
			{
				value: 2,
				group: 'Зритель',
				img: 'img/r/7.png',
				isActive: false,
				headerText: 'Проектор',
				text: 'Пусть вся жизнь будет только в хорошем разрешении, 720hd – это не твой уровень!'
			}
		]
	},
	methods: {
		startTest: function() {
			this.isStart = false;
		},
		getAnswer: function(value, answer) {
			var v = value;
			var a = answer;
			for(var i = 0; i < this.dots.length; i++) {
				if(this.dots[i].value === v) {
					i++;
					this.dots[i].isActive = true;
				}
			}
			for(var i = 0; i < this.answerText.length; i++) {
				if(this.answerText[i].value === v) {
					this.answerText[i].isActive = !this.answerText[i].isActive;
				}
			}
			for(var i = 0; i < this.answers.length; i++) {
				if (this.answers[i].value === v) {
					if(v === 4) {
						this.answerGroupText.isActive = true;
						if(this.answers[i].group === a.group) {
							this.group = this.answers[i].group;
							this.getGroupsAnswer(this.group);
						}
					} 
					this.answers[i].isActive = false;
				};
			}
			v++;
			this.changeAnswer(v);
		},
		changeAnswer: function(value) {
			var v = value;
			for(var i = 0; i < this.answerText.length; i++) {
				if(this.answerText[i].value === v) {
					this.answerText[i].isActive = !this.answerText[i].isActive;
				}
			}
			for(var i = 0; i < this.answers.length; i++) {
				if (this.answers[i].value === v) {
				this.answers[i].isActive = true;
				};
			}
		},
		getGroupsAnswer: function(group) {
			this.groupGood = group;
			for(var i = 0; i < this.answersGroups.length; i++) {
				this.answersGroups[i].isActive = true;
			}
		},
		getGood: function(answerGood){
			var answerGood = answerGood;
			this.isShare = true;
			this.goodActive = true;
			// this.shareTo(this.goodActive);
			answerGood.isActive = false;
			this.answerGroupText.isActive = false;
			for(var i = 0; i < this.good.length; i++) {
				if ((this.good[i].group === this.groupGood) && (this.good[i].value === answerGood.goods)) {
					this.good[i].isActive = true;
				}
			}
		},
		startAgain: function(good) {
			var good = good;
			this.goodActive = false;
			for(var i = 0; i < this.answerText.length; i++) {
				if(this.answerText[i].value === 1) {
					this.answerText[i].isActive = !this.answerText[i].isActive;
				}
			}
			for(var i = 0; i < this.answers.length; i++) {
				if (this.answers[i].value === 1) {
				this.answers[i].isActive = true;
				};
			}
			for(var i = 0; i < this.dots.length; i++) {
				if(this.dots[i].value === 1) {
					this.dots[i].isActive = true;
				} else {
					this.dots[i].isActive = false;
				};
			}
			for(var i = 0; i < this.answersGroups.length; i++) {
				this.answersGroups[i].isActive = false;
			}
			for(var i = 0; i < this.good.length; i++) {
				this.good[i].isActive = false;
			}
		},
	}
})

