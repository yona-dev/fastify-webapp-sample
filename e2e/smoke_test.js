SuiteOf('smoke');

Scenario('webサイトを開きログインする', ({I}) => {
    I.amOnPage('https://fastify-webapp-sample-production-901e.up.railway.app/')
    I.click('ログインする')
    I.fillField('ユーザー名', 'user1')
    I.fillField('パスワード', 'super-strong-passphrase')
    I.click('ログイン')
    I.see('user1 さん')
})