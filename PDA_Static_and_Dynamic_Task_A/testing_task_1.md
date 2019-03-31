### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
# require relative needs a path './card'
class CardGame


  def checkforAce(card)
    # method name should be check_for_ace(card)
    if card.value = 1
      # checking for equal values should use ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # method should be defined with 'def' not 'dif'. parameters need to be separated with commas
  if card1.value > card2.value
    return card.name
    # variable 'card' doesn't exist - card1?
    # no method .name for card class
  else
    card2
    # should be return card2 
  end
end
end

def self.cards_total(cards)
  #should be defined inside CardGame class
  # not a class method? each CardGame should be responsible for own total
  total
  # total variable is not set - total = 0 ?
  for card in cards
    total += card.value
    return "You have a total of" + total
    # should be returned OUTSIDE for loop
  end
end


```
