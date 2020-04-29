module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  if (item.enhancement > 20) {
    { throw new Error("item enhancement range 0 - 20") };
  } else if (item.enhancement < 20) {
      const newValue = item.enhancement + 1;
      return { ...item, enhancement: newValue};
  } else {
    return { ...item };
  };
}

function fail(item) {
  if (item.enhancement > 16) {
    const newDurability = item.durability - 10;
    const newEnhancement = item.enhancement - 1;
    return { ...item, 
      durability: newDurability,
      enhancement: newEnhancement
    };
  } else if (item.enhancement >= 15 && item.enhancement <= 16) {
    const newDurability = item.durability - 10;
    return { ...item, durability: newDurability };
  } else if (item.enhancement < 15) {
    const newDurability = item.durability - 5;
    return { ...item, durability: newDurability };
  } else {
    return { ...item };
  }


}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
