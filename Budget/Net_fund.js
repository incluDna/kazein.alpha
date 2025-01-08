// ตัวแปรพื้นฐาน
      const yearsUntilRetirement = retirementAge - currentAge;
      const yearsAfterRetirement = lifespan - retirementAge;
      const inflationRate = 0.03; // 3% เงินเฟ้อ
      const investmentReturn = 0.03; // 3% ผลตอบแทนสุทธิ

// คำนวณเงินที่ต้องมีแบบ Net Refund
      const annualExpense = monthlyExpense * 12;
      const netRefund = annualExpense * ((1 - Math.pow(1 + investmentReturn, -yearsAfterRetirement)) / investmentReturn);

// คำนวณเงินที่เก็บได้ก่อนเกษียณ
      const savingsPerMonth = monthlyIncome - monthlyExpense;
      const totalSavings = savingsPerMonth * 12 * yearsUntilRetirement * Math.pow(1 + investmentReturn, yearsUntilRetirement);
