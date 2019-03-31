require('minitest/autorun')
require('minitest/rg')

require_relative('../card')
require_relative('../testing_task_2')

class CardGameTest < MiniTest::Test

  def setup

    @card1 = Card.new('hearts', 1)
    @card2 = Card.new('clubs', 7)

    @cardgame = CardGame.new()
  end

  def test_check_for_ace__card_is_ace()
    result = @cardgame.check_for_ace(@card1)
    assert_equal(true, result)
  end

  def test_check_for_ace__card_not_ace()
    result = @cardgame.check_for_ace(@card2)
    assert_equal(false, result)
  end

  def test_highest_card()
    result1 = @cardgame.highest_card(@card1, @card2)
    result2 = @cardgame.highest_card(@card2, @card1)
    assert_equal(@card2, result1)
    assert_equal(@card2, result2)
  end

  def test_cards_total()
    result = @cardgame.cards_total([@card1, @card2])
    assert_equal("You have a total of 8", result)
  end
end
