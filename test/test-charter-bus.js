const CB = require('..');
const Test = require('tape');

Test('charter bus stats', t => {

  t.test('find history between players', t => {
    t.equals(CB.findHistory('Shaun', 'Zach'), '3-2');
    t.equals(CB.findHistory('Shaun', 'Cameron'), '5-1');
    t.equals(CB.findHistory('Shaun', 'Ben'), '1-5');

    t.end();
  });

  t.test('find information on player', t => {
    t.equals(CB.find('Ben', 'totalRecord'), '44-34');
    t.equals(CB.find('Shaun', 'totalRecord'), '43-35');
    t.equals(CB.find('Zach', 'totalRecord'), '31-34');

    t.equals(CB.find('Ben', 'totalPointsAgainst'), '7165.9');
    t.equals(CB.find('Shaun', 'totalPointsAgainst'), '6792.2');
    t.equals(CB.find('Zach', 'totalPointsAgainst'), '6109.9');

    t.equals(CB.find('Ben', 'totalPointsFor'), '7474.4');
    t.equals(CB.find('Shaun', 'totalPointsFor'), '7131.6');
    t.equals(CB.find('Zach', 'totalPointsFor'), '5830');

    t.equals(CB.find('Ben', 'avgPointsForByYear'), '1245.73');
    t.equals(CB.find('Shaun', 'avgPointsForByYear'), '1188.60');
    t.equals(CB.find('Zach', 'avgPointsForByYear'), '1166.00');

    t.equals(CB.find('Ben', 'avgPointsForByWeek'), '95.83');
    t.equals(CB.find('Shaun', 'avgPointsForByWeek'), '91.43');
    t.equals(CB.find('Zach', 'avgPointsForByWeek'), '89.69');

    t.equals(CB.find('Ben', 'avgPointsAgainstByYear'), '1194.32');
    t.equals(CB.find('Shaun', 'avgPointsAgainstByYear'), '1132.03');
    t.equals(CB.find('Zach', 'avgPointsAgainstByYear'), '1221.98');

    t.equals(CB.find('Ben', 'avgPointsAgainstByWeek'), '91.87');
    t.equals(CB.find('Shaun', 'avgPointsAgainstByWeek'), '87.08');
    t.equals(CB.find('Zach', 'avgPointsAgainstByWeek'), '94.00');

    t.equals(CB.find('Ben', 'highWeek'), '140.2');
    t.equals(CB.find('Shaun', 'highWeek'), '152.9');
    t.equals(CB.find('Zach', 'highWeek'), '137.5');

    t.equals(CB.find('Ben', 'lowWeek'), '44.8');
    t.equals(CB.find('Shaun', 'lowWeek'), '45');
    t.equals(CB.find('Zach', 'lowWeek'), '34.5');

    t.equals(CB.find('Ben', 'bestFinish'), '2');
    t.equals(CB.find('Shaun', 'bestFinish'), '3');
    t.equals(CB.find('Zach', 'bestFinish'), '2');

    t.equals(CB.find('Ben', 'worstFinish'), '6');
    t.equals(CB.find('Shaun', 'worstFinish'), '12');
    t.equals(CB.find('Zach', 'worstFinish'), '13');

    t.equals(CB.find('Ben', 'avgFinish'), '4.00');
    t.equals(CB.find('Shaun', 'avgFinish'), '5.67');
    t.equals(CB.find('Zach', 'avgFinish'), '8.20');

    t.equals(CB.find('Ben', 'championships'), '0');
    t.equals(CB.find('Shaun', 'championships'), '0');
    t.equals(CB.find('Zach', 'championships'), '0');

    t.end();
  });

  t.test('find information by year', t => {
    t.equals(CB.findByYear(2010, 'Ben', 'pointsForByYear'), '1231.5');
    t.equals(CB.findByYear(2011, 'Ben', 'pointsForByYear'), '1244.5');
    t.equals(CB.findByYear(2012, 'Ben', 'pointsForByYear'), '1209.9');

    t.equals(CB.findByYear(2010, 'Ben', 'finishByYear'), '3');
    t.equals(CB.findByYear(2011, 'Ben', 'finishByYear'), '5');
    t.equals(CB.findByYear(2012, 'Ben', 'finishByYear'), '2');

    t.equals(CB.findByYear(2010, 'Ben', 'pointsAgainstByYear'), '1145.5');
    t.equals(CB.findByYear(2011, 'Ben', 'pointsAgainstByYear'), '1164');
    t.equals(CB.findByYear(2012, 'Ben', 'pointsAgainstByYear'), '1077.8');

    t.end();
  });

  t.end();
});
