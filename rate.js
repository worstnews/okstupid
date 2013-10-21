var url = 'https://www.okcupid.com/login', 
    username = '  ', //don't forget to enter your own credentials ya dummy! 
    password = '  ',
    x = require('casper').selectXPath;

casper.test.comment('we bout to rate EVERYONE');

casper.start(url, function () {
    this.test.info('logging in to okstupid');
    this.fill('#login_form', {
        'username': username,
        'password' : password
    }, true);
  });
  
    casper.thenClick('#nav_ratings a', function () {
        this.test.info('click through to quickmatch');
    });

/* this is ghetto and i'm embarassed.
   it seems like OKC limits ratings somehow. tried looping it 100x anid it crapped out silently at some point.
   leaving it at 25 for now
*/

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(3000); // wait before doing anything else  
        this.echo('you just gave 5 stars to ' + this.evaluate(function() {
            return __utils__.getElementByXPath('//a[contains(@href, "?cf=quickmatch/")]').getAttribute('href');
        }), 'INFO'); // print dat shit
    });

casper.run(function() {
    this.exit();
});



