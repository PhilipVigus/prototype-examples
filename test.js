// Factory pattern
function createAnimal(name) {
  const o = new Object;
  o.name = name;
  o.identify = function() {
    console.log(`Hi, I'm ${name}`);
  };
  return o;
}

cat = createAnimal('cat');
cat.identify();
console.log(cat instanceof Object)

// Constructor pattern
/*
 * Constructor names are usually captilised.
 *
 * Properties and functions are directly assigned to the this
 * object. 
 * 
 * Each time an animal is created it creates a copy of each
 * of these properties and functions.
 */
function Animal(name) {
  this.name = name;
  this.identify = function() {
    console.log(`Hi, I'm ${name}`);
  };
}

// Prototype pattern
/**
 * Properties are added to the prototype
 * 
 * Each time an animal is created, it shares
 * the properties and functions added to the
 * prototype if it doesn't have its own
 * 
 * This is not usually desired behaviour for
 * properties, unless they are 'class'
 * properties.
 */
function Animal() {}

Animal.prototype.name = 'Noname';
Animal.prototype.identify = function() {
  console.log(`Hi, I'm ${name}`);
};

// Constructor/prototype pattern 
/**
 * Combines the previous two approaches.
 * 
 * Properties are added in the constructor
 * so they are independent per copy of the 
 * object.
 * 
 * Functions are added to the prototype
 * so they are shared by all instances.
 */
function Animal(name) {
  this.name = name;
}

Animal.prototype.identify = function() {
  console.log(`Hi, I'm ${name}`);
}