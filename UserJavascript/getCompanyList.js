/**
 * 検索結果として表示中の会社名リストを表示
 * 
 * Google Chrome 拡張機能「User JavaScript and CSS」使用
 * @author gingerale333
 */

/**
 * 会社名一覧を表示しOKで次ページへ遷移
 */
function popupNameArrAndConfirmGoNext() {
    console.info('User Javascript is running.');

    //ページ遷移処理
    var nextButton = $('.btn_r.last')[0]; //次ページへの遷移ボタンのクラス名
    var nextLink = (nextButton === undefined ? '' : $(nextButton).find('a')[0]);
    var nextPage = (nextLink === undefined ? '' : nextLink.href); //次ページのURL

    //このページ内の会社名リスト取得
    //var testArr = new Array('株式会社aaa', '株式会社bbb');
    var companies = $('.company'); //取得対象項目のクラス名
    var nameArr = Array.from(companies, function getText(company) {
        var companyName = $(company).text();
        return (companyName);
    });

    //表示
    var nameText = nameArr.join('\r\n');
    var msg = 'このページの会社名一覧は下記です。' + (nextPage === '' ? '' : '次ページに遷移しますか');
    var res = prompt(msg, nameText);

    //OKを押すと次ページへ遷移
    if (res !== null && nextPage !== '') {
        location.href = nextPage;
    }
}

// ページの読み込み完了時に実行
window.onload = popupNameArrAndConfirmGoNext;
