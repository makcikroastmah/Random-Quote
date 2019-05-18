const quotes = [
    {
        quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
        author: 'Dr. Suess'
    },
    {
       quote: 'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.',
       author: 'Marilyn Monroe'
    },
    {
        quote: 'Get busy living or get busy dying.',
        author: 'Stephen King'
     },
     {
        quote: 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',
        author: 'Mark Caine'
     },
     {
        quote: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us',
        author: 'Helen Keller'
     },
     {
         quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do',
         author:'Mark Twain',
     },
     {
        quote: 'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid',
        author:'Audre Lorde',
    },
    {
        quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people',
        author:'Eleanor Roosevelt',
    },
    {
        quote: 'A successful man is one who can lay a firm foundation with the bricks others have thrown at him',
        author:'David Brinkley',
    },
    {
        quote: 'Those who dare to fail miserably can achieve greatly.',
        author:'John F. Kennedy',
    },
    {
        quote: 'I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.',
        author:'Herbert Bayard Swope',
    },
    {
        quote:'Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success.',
        author:'Thomas J. Watson',
    },
    {
        quote:'It is hard to fail, but it is worse never to have tried to succeed.',
        author:'Theodore Roosevelt',
    },
    {
        quote:'I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down',
        author:'Abraham Lincoln',
    },
    {
        quote:'Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world',
        author:'Lucille Ball',
    },
    {
        quote:'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
        author:'Joshua J. Marine',
    },
    {
        quote:'It is our choices, that show what we truly are, far more than our abilities.',
        author:'J. K Rowling',
    },
    {
        quote:'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
        author:'Thomas A. Edison',
    },
    {
        quote:'If you want to live a happy life, tie it to a goal, not to people or things',
        author:'Albert Einstein',
    },
    {
        quote:'Success is just a war of attrition. Sure, there’s an element of talent you should probably possess. But if you just stick around long enough, eventually something is going to happen.',
        author:'Dax Shepard',
    },
    {
        quote:'The opposite of love is not hate; it’s indifference.',
        author:'Elie Wiesel',
    },
    {
        quote:'The good news is that the moment you decide that what you know is more important than what you have been taught to believe, you will have shifted gears in your quest for abundance. Success comes from within, not from without.',
        author:'Elie Wiesel',
    },
    {
        quote:'Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn’t really do it, the just saw something. It seemed obvious to them after a while.',
        author:'Steve Jobs',
    },

    
    {
        quote: ' Que sera sera' ,
        author:'Mohamed Hussein bin Mohamed Saddiq',
    }
    
     
]; 

function getRandomQuote() {
    let randomIndex = Math.floor((Math.random() * quotes.length));
    let randomQuote = quotes[randomIndex].quote;
    let randomAuthor = quotes[randomIndex].author;

    document.getElementById('quote').innerHTML = randomQuote;
    document.getElementById('author').innerHTML = randomAuthor;


}
