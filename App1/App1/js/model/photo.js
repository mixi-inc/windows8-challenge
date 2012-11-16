// ■依存
// tokenManager.js
// APIRequester.js

(function () {
    "use strict";

    /**
     * かんたん公開にアップされているフォトの情報を取得します
     *
     * @name getAsync
     * @param なし
     * @return {WinJS.Promise} 処理のPromiseオブジェクト
     */
    function getAsync() {

        return TokenManager.getTokenAsync()
        .then(function (token) {
            return APIRequester.getDefaultAlbumPhotos(token);
        })
        .then(function (result) {
            // TODO: resultに入っているレスポンスを整形してdummyと同じフォーマットにしましょう
            return [];
        });
    }

    WinJS.Namespace.define("PhotoModel", {
        getAsync: getAsync
    });
})();