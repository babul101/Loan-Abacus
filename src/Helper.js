function Helper(amount, term) {
  let totalAmount;
  if (amount <= 1000) {
    totalAmount = amount * 0.25;
  } else if (amount > 1000 && amount <= 5000) {
    totalAmount = amount * 0.2;
  } else if (amount > 5000 && amount <= 10000) {
    totalAmount = amount * 0.15;
  } else {
    totalAmount = amount * 0.1;
  }

  let totalTerm;
  switch (term) {
    case 3:
      totalTerm = amount * 0.05;
      break;
    case 6:
      totalTerm = amount * 0.1;
      break;
    case 12:
      totalTerm = amount * 0.15;
      break;
    case 24:
      totalTerm = amount * 0.2;
      break;
    default:
      break;
  }

  return amount + totalAmount + totalTerm;
}

export default Helper;
