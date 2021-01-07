/*

- 52 images
    - array of objects
    - [{}, {}, {}]
    - suit, value, imageURL(path)
    - 2D.jpg, 3D.jpg, (2 of diamonds, etc..)
- array of objects with 52 elements
    - write a loop that can create the deck of cards (rather than hard code if possible)
- shuffle-provided
- pop() = getting cards from deck
- use the popped objects, place (dom manipulation) the images on your screen
- dealerArray, playerArray
    - cards get pushed to these arrays
    - calculate the value of each hand
- hit(event listener)
    - pop card from card deck
    - push card to the player hand (array)
    - recalculate
- stand(event listener)
    - process starts for dealer
    - check value of the dealer hand
    - as long as less than 17, then dealer contines to get cards
- ACE card = can be 1 or 11

- 2 buttons (hit, stand)


*/