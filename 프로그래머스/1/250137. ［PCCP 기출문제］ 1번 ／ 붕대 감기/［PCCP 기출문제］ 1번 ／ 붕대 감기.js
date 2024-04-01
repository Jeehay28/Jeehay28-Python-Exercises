function solution(bandage, health, attacks) {
      
    let consecutiveSuccess = 0;
    let remainingHealth = health;
    const [timeForBonus, recovery, bonus] = bandage;
    const duration = attacks[attacks.length - 1][0];
    
    for (let i = 0; i <= duration; i++) {
        const attackedAt = attacks.filter(([time, attack]) => time === i);
        const attacked = attackedAt.length === 0 ? 0 : -attackedAt.flat()[1];

        if (attacked < 0) {
          remainingHealth += attacked;
            if(remainingHealth <= 0) {
                return -1;
                
            }
          consecutiveSuccess = 0;

        } else {
          if (remainingHealth < health) {
            remainingHealth += recovery;
            remainingHealth = remainingHealth >= health ? health : remainingHealth;
            consecutiveSuccess += 1;
            if (consecutiveSuccess >= timeForBonus) {
              remainingHealth += bonus;
                remainingHealth = remainingHealth >= health ? health : remainingHealth;
              consecutiveSuccess = 0;
            }
          }
        }
      }

  return remainingHealth;
  
    
}