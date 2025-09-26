
let correctAnswer = {};
const btniniciar = document.getElementById('btnIniciar')


const characters = [
    { pron: 'أ', hi: 'あ', ka: 'ア' },
    { pron: 'إِي', hi: 'い', ka: 'イ' },
    { pron: 'أُ', hi: 'う', ka: 'ウ' },
    { pron: 'إِي', hi: 'え', ka: 'エ' },
    { pron: 'أُو', hi: 'お', ka: 'オ' },
    { pron: 'كَا', hi: 'か', ka: 'カ' },
    { pron: 'كِي', hi: 'き', ka: 'キ' },
    { pron: 'كُو', hi: 'く', ka: 'ク' },
    { pron: 'كِي', hi: 'け', ka: 'ケ' },
    { pron: 'كُو', hi: 'こ', ka: 'コ' },
    { pron: 'سَا', hi: 'さ', ka: 'サ' },
    { pron: 'شي', hi: 'し', ka: 'シ' },
    { pron: 'سُو', hi: 'す', ka: 'ス' },
    { pron: 'سِي', hi: 'せ', ka: 'セ' },
    { pron: 'سُو', hi: 'そ', ka: 'ソ' },
    { pron: 'تَا', hi: 'た', ka: 'タ' },
    { pron: 'تشِي', hi: 'ち', ka: 'チ' },
    { pron: 'تسُو', hi: 'つ', ka: 'ツ' },
    { pron: 'تِي', hi: 'て', ka: 'テ' },
    { pron: 'تُو', hi: 'と', ka: 'ト' },
    { pron: 'نَا', hi: 'な', ka: 'ナ' },
    { pron: 'نِي', hi: 'に', ka: 'ニ' },
    { pron: 'نُو', hi: 'ぬ', ka: 'ヌ' },
    { pron: 'نِي', hi: 'ね', ka: 'ネ' },
    { pron: 'نُو', hi: 'の', ka: 'ノ' },
    { pron: 'هَا', hi: 'は', ka: 'ハ' },
    { pron: 'هِي', hi: 'ひ', ka: 'ヒ' },
    { pron: 'فُو', hi: 'ふ', ka: 'フ' },
    { pron: 'هِي', hi: 'へ', ka: 'ヘ' },
    { pron: 'هُو', hi: 'ほ', ka: 'ホ' },
    { pron: 'مَا', hi: 'ま', ka: 'マ' },
    { pron: 'مِي', hi: 'み', ka: 'ミ' },
    { pron: 'مُو', hi: 'む', ka: 'ム' },
    { pron: 'مِي', hi: 'め', ka: 'メ' },
    { pron: 'مُو', hi: 'も', ka: 'モ' },
    { pron: 'يَا', hi: 'や', ka: 'ヤ' },
    { pron: 'يُو', hi: 'ゆ', ka: 'ユ' },
    { pron: 'يُو', hi: 'よ', ka: 'ヨ' },
    { pron: 'رَا', hi: 'ら', ka: 'ラ' },
    { pron: 'رِي', hi: 'り', ka: 'リ' },
    { pron: 'رُو', hi: 'る', ka: 'ル' },
    { pron: 'رِي', hi: 'れ', ka: 'レ' },
    { pron: 'رُو', hi: 'ろ', ka: 'ロ' },
    { pron: 'وَا', hi: 'わ', ka: 'ワ' },
    { pron: 'وُو', hi: 'を', ka: 'ヲ' },
    { pron: 'نْ', hi: 'ん', ka: 'ン' },
    { pron: 'غَا', hi: 'が', ka: 'ガ' },
    { pron: 'غِي', hi: 'ぎ', ka: 'ギ' },
    { pron: 'غُو', hi: 'ぐ', ka: 'グ' },
    { pron: 'غِي', hi: 'げ', ka: 'ゲ' },
    { pron: 'غُو', hi: 'ご', ka: 'ゴ' },
    { pron: 'زَا', hi: 'ざ', ka: 'ザ' },
    { pron: 'جِي', hi: 'じ', ka: 'ジ' },
    { pron: 'زُو', hi: 'ず', ka: 'ズ' },
    { pron: 'زِي', hi: 'ぜ', ka: 'ゼ' },
    { pron: 'زُو', hi: 'ぞ', ka: 'ゾ' },
    { pron: 'دَا', hi: 'だ', ka: 'ダ' },
    { pron: 'جِي', hi: 'ぢ', ka: 'ヂ' },
    { pron: 'زُو', hi: 'づ', ka: 'ヅ' },
    { pron: 'دِي', hi: 'で', ka: 'デ' },
    { pron: 'دُو', hi: 'ど', ka: 'ド' },
    { pron: 'بَا', hi: 'ば', ka: 'バ' },
    { pron: 'بِي', hi: 'び', ka: 'ビ' },
    { pron: 'بُو', hi: 'ぶ', ka: 'ブ' },
    { pron: 'بِي', hi: 'べ', ka: 'ベ' },
    { pron: 'بُو', hi: 'ぼ', ka: 'ボ' },
    { pron: 'پَا', hi: 'ぱ', ka: 'パ' },
    { pron: 'پِي', hi: 'ぴ', ka: 'ピ' },
    { pron: 'پُو', hi: 'ぷ', ka: 'プ' },
    { pron: 'پِي', hi: 'ぺ', ka: 'ペ' },
    { pron: 'پُو', hi: 'ぽ', ka: 'ポ' },
    { pron: 'كيا', hi: 'きゃ', ka: 'キャ' },
    { pron: 'كيو', hi: 'きゅ', ka: 'キュ' },
    { pron: 'كيو', hi: 'きょ', ka: 'キョ' },
    { pron: 'شا', hi: 'しゃ', ka: 'シャ' },
    { pron: 'شو', hi: 'しゅ', ka: 'シュ' },
    { pron: 'شو', hi: 'しょ', ka: 'ショ' },
    { pron: 'تشا', hi: 'ちゃ', ka: 'チャ' },
    { pron: 'تشو', hi: 'ちゅ', ka: 'チュ' },
    { pron: 'تشو', hi: 'ちょ', ka: 'チョ' },
    { pron: 'نيا', hi: 'にゃ', ka: 'ニャ' },
    { pron: 'نيو', hi: 'にゅ', ka: 'ニュ' },
    { pron: 'نيو', hi: 'にょ', ka: 'ニョ' },
    { pron: 'هيا', hi: 'ひゃ', ka: 'ヒャ' },
    { pron: 'هيو', hi: 'ひゅ', ka: 'ヒュ' },
    { pron: 'هيو', hi: 'ひょ', ka: 'ヒョ' },
    { pron: 'ميا', hi: 'みゃ', ka: 'ミャ' },
    { pron: 'ميو', hi: 'みゅ', ka: 'ミュ' },
    { pron: 'ميو', hi: 'みょ', ka: 'ミョ' },
    { pron: 'ريا', hi: 'りゃ', ka: 'リャ' },
    { pron: 'ريو', hi: 'りゅ', ka: 'リュ' },
    { pron: 'ريو', hi: 'りょ', ka: 'リョ' },
    { pron: 'غيا', hi: 'ぎゃ', ka: 'ギャ' },
    { pron: 'غيو', hi: 'ぎゅ', ka: 'ギュ' },
    { pron: 'غيو', hi: 'ぎょ', ka: 'ギョ' },
    { pron: 'جا', hi: 'じゃ', ka: 'ジャ' },
    { pron: 'جو', hi: 'じゅ', ka: 'ジュ' },
    { pron: 'جو', hi: 'じょ', ka: 'ジョ' },
    { pron: 'بيا', hi: 'びゃ', ka: 'ビャ' },
    { pron: 'بيو', hi: 'びゅ', ka: 'ビュ' },
    { pron: 'بيو', hi: 'びょ', ka: 'ビョ' },
    { pron: 'پيا', hi: 'ぴゃ', ka: 'ピャ' },
    { pron: 'پيو', hi: 'ぴゅ', ka: 'ピュ' },
    { pron: 'پيو', hi: 'ぴょ', ka: 'ピョ' }
];


//selecciona 1 al azar marcandolo como opción correcta y lo pushea dentro de cards[]
function selectCard(characters) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    correctAnswer = characters[randomNumber];
    cards.push(correctAnswer);
    console.log(correctAnswer);
    return correctAnswer;
}

function selectCards(characters, numOfCards) {
    let selectedIndexes = [];

    while (cards.length < numOfCards) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        if (!selectedIndexes.includes(randomIndex)) {
            selectedIndexes.push(randomIndex);
            cards.push(characters[randomIndex]);
        }
    }
}

function showCards(cardsList) {
    const shuffledCards = cardsList.slice().sort(() => Math.random() - 0.5);
    const container = document.getElementById('cardContainer');
    const selectedCard = document.getElementById('selectedCard');
    container.innerHTML = '';
    selectedCard.innerHTML = '';


    shuffledCards.forEach(function (card) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('col-sm-6', 'col-md-6', 'col-6', 'col-lg-6', 'mt-2');
        cardElement.innerHTML = `
        <div class="lettercard">
            <p>${card.pron}</p>
        </div>
        `;
        container.appendChild(cardElement);
    });

    const selectedCardElement = document.createElement('div');
    selectedCardElement.innerHTML = `
    <p>${correctAnswer.hi}</p>
    `;

    selectedCardElement.classList.add('lettercard2', 'col-sm-12', 'col-lg-12', 'justify-content-center');
    selectedCard.appendChild(selectedCardElement);
}


function iniciar() {
    cards = [];

    selectCard(characters);
    selectCards(characters, 4);
    showCards(cards);

    let tarjetas = document.getElementsByClassName('lettercard');

    Array.from(tarjetas).forEach(function (card) {
        card.addEventListener('click', function () {
            let selectedCardPron = card.querySelector('p').textContent.trim();
            if (selectedCardPron === correctAnswer.pron) {
                const audio = document.getElementById('audiocorrecto')
                iniciar();
                audio.play();
            }
        });
    });

}

document.addEventListener('DOMContentLoaded', iniciar)

btniniciar.addEventListener('click', iniciar);


