describe('moveDodgerLeft()', () => {
  beforeEach(() => {
    dodger = document.getElementById('dodger')
  })

  it('moves the DODGER to the left', () => {
    var left = dodger.style.left
    left = parseInt(left)

    moveDodgerLeft()

    var newPosition = dodger.style.left
    newPosition = parseInt(newPosition)

    expect(newPosition).to.be.below(left)
  })
})

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });