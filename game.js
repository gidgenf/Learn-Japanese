
let correctAnswer = {};
const btniniciar = document.getElementById('btnIniciar')


const characters = [
    { pron: 'a', hi: 'あ', ka: 'ア' },
    { pron: 'i', hi: 'い', ka: 'イ' },
    { pron: 'u', hi: 'う', ka: 'ウ' },
    { pron: 'e', hi: 'え', ka: 'エ' },
    { pron: 'o', hi: 'お', ka: 'オ' },
    { pron: 'ka', hi: 'か', ka: 'カ' },
    { pron: 'ki', hi: 'き', ka: 'キ' },
    { pron: 'ku', hi: 'く', ka: 'ク' },
    { pron: 'ke', hi: 'け', ka: 'ケ' },
    { pron: 'ko', hi: 'こ', ka: 'コ' },
    { pron: 'sa', hi: 'さ', ka: 'サ' },
    { pron: 'shi', hi: 'し', ka: 'シ' },
    { pron: 'su', hi: 'す', ka: 'ス' },
    { pron: 'se', hi: 'せ', ka: 'セ' },
    { pron: 'so', hi: 'そ', ka: 'ソ' },
    { pron: 'ta', hi: 'た', ka: 'タ' },
    { pron: 'chi', hi: 'ち', ka: 'チ' },
    { pron: 'tsu', hi: 'つ', ka: 'ツ' },
    { pron: 'te', hi: 'て', ka: 'テ' },
    { pron: 'to', hi: 'と', ka: 'ト' },
    { pron: 'na', hi: 'な', ka: 'ナ' },
    { pron: 'ni', hi: 'に', ka: 'ニ' },
    { pron: 'nu', hi: 'ぬ', ka: 'ヌ' },
    { pron: 'ne', hi: 'ね', ka: 'ネ' },
    { pron: 'no', hi: 'の', ka: 'ノ' },
    { pron: 'ha', hi: 'は', ka: 'ハ' },
    { pron: 'hi', hi: 'ひ', ka: 'ヒ' },
    { pron: 'fu', hi: 'ふ', ka: 'フ' },
    { pron: 'he', hi: 'へ', ka: 'ヘ' },
    { pron: 'ho', hi: 'ほ', ka: 'ホ' },
    { pron: 'ma', hi: 'ま', ka: 'マ' },
    { pron: 'mi', hi: 'み', ka: 'ミ' },
    { pron: 'mu', hi: 'む', ka: 'ム' },
    { pron: 'me', hi: 'め', ka: 'メ' },
    { pron: 'mo', hi: 'も', ka: 'モ' },
    { pron: 'ya', hi: 'や', ka: 'ヤ' },
    { pron: 'yu', hi: 'ゆ', ka: 'ユ' },
    { pron: 'yo', hi: 'よ', ka: 'ヨ' },
    { pron: 'ra', hi: 'ら', ka: 'ラ' },
    { pron: 'ri', hi: 'り', ka: 'リ' },
    { pron: 'ru', hi: 'る', ka: 'ル' },
    { pron: 're', hi: 'れ', ka: 'レ' },
    { pron: 'ro', hi: 'ろ', ka: 'ロ' },
    { pron: 'wa', hi: 'わ', ka: 'ワ' },
    { pron: 'wo', hi: 'を', ka: 'ヲ' },
    { pron: 'n', hi: 'ん', ka: 'ン' },
    { pron: 'ga', hi: 'が', ka: 'ガ' },
    { pron: 'gi', hi: 'ぎ', ka: 'ギ' },
    { pron: 'gu', hi: 'ぐ', ka: 'グ' },
    { pron: 'ge', hi: 'げ', ka: 'ゲ' },
    { pron: 'go', hi: 'ご', ka: 'ゴ' },
    { pron: 'za', hi: 'ざ', ka: 'ザ' },
    { pron: 'ji', hi: 'じ', ka: 'ジ' },
    { pron: 'zu', hi: 'ず', ka: 'ズ' },
    { pron: 'ze', hi: 'ぜ', ka: 'ゼ' },
    { pron: 'zo', hi: 'ぞ', ka: 'ゾ' },
    { pron: 'da', hi: 'だ', ka: 'ダ' },
    { pron: 'ji', hi: 'ぢ', ka: 'ヂ' },
    { pron: 'zu', hi: 'づ', ka: 'ヅ' },
    { pron: 'de', hi: 'で', ka: 'デ' },
    { pron: 'do', hi: 'ど', ka: 'ド' },
    { pron: 'ba', hi: 'ば', ka: 'バ' },
    { pron: 'bi', hi: 'び', ka: 'ビ' },
    { pron: 'bu', hi: 'ぶ', ka: 'ブ' },
    { pron: 'be', hi: 'べ', ka: 'ベ' },
    { pron: 'bo', hi: 'ぼ', ka: 'ボ' },
    { pron: 'pa', hi: 'ぱ', ka: 'パ' },
    { pron: 'pi', hi: 'ぴ', ka: 'ピ' },
    { pron: 'pu', hi: 'ぷ', ka: 'プ' },
    { pron: 'pe', hi: 'ぺ', ka: 'ペ' },
    { pron: 'po', hi: 'ぽ', ka: 'ポ' },
    { pron: 'kya', hi: 'きゃ', ka: 'キャ' },
    { pron: 'kyu', hi: 'きゅ', ka: 'キュ' },
    { pron: 'kyo', hi: 'きょ', ka: 'キョ' },
    { pron: 'sha', hi: 'しゃ', ka: 'シャ' },
    { pron: 'shu', hi: 'しゅ', ka: 'シュ' },
    { pron: 'sho', hi: 'しょ', ka: 'ショ' },
    { pron: 'cha', hi: 'ちゃ', ka: 'チャ' },
    { pron: 'chu', hi: 'ちゅ', ka: 'チュ' },
    { pron: 'cho', hi: 'ちょ', ka: 'チョ' },
    { pron: 'nya', hi: 'にゃ', ka: 'ニャ' },
    { pron: 'nyu', hi: 'にゅ', ka: 'ニュ' },
    { pron: 'nyo', hi: 'にょ', ka: 'ニョ' },
    { pron: 'hya', hi: 'ひゃ', ka: 'ヒャ' },
    { pron: 'hyu', hi: 'ひゅ', ka: 'ヒュ' },
    { pron: 'hyo', hi: 'ひょ', ka: 'ヒョ' },
    { pron: 'mya', hi: 'みゃ', ka: 'ミャ' },
    { pron: 'myu', hi: 'みゅ', ka: 'ミュ' },
    { pron: 'myo', hi: 'みょ', ka: 'ミョ' },
    { pron: 'rya', hi: 'りゃ', ka: 'リャ' },
    { pron: 'ryu', hi: 'りゅ', ka: 'リュ' },
    { pron: 'ryo', hi: 'りょ', ka: 'リョ' },
    { pron: 'gya', hi: 'ぎゃ', ka: 'ギャ' },
    { pron: 'gyu', hi: 'ぎゅ', ka: 'ギュ' },
    { pron: 'gyo', hi: 'ぎょ', ka: 'ギョ' },
    { pron: 'ja', hi: 'じゃ', ka: 'ジャ' },
    { pron: 'ju', hi: 'じゅ', ka: 'ジュ' },
    { pron: 'jo', hi: 'じょ', ka: 'ジョ' },
    { pron: 'bya', hi: 'びゃ', ka: 'ビャ' },
    { pron: 'byu', hi: 'びゅ', ka: 'ビュ' },
    { pron: 'byo', hi: 'びょ', ka: 'ビョ' },
    { pron: 'pya', hi: 'ぴゃ', ka: 'ピャ' },
    { pron: 'pyu', hi: 'ぴゅ', ka: 'ピュ' },
    { pron: 'pyo', hi: 'ぴょ', ka: 'ピョ' }
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


