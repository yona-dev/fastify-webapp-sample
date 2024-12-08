SuiteOf("一般的なエラーのテスト");

Scenario(
	"ページが存在しない URL にアクセスするとエラーメッセージと商品一覧のリンクが表示される",
	({ I }) => {
		I.amOnPage("/undefined");
		I.see("お探しのページは見つかりませんでした");
		I.click("商品一覧へ戻る");
		I.seeInTitle("商品一覧");
	},
);
