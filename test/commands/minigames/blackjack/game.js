//
// Copyright (c) 2017 DrSmugleaf
//

"use strict"
const BlackjackDeck = require("../../../../src/commands/minigames/blackjack/deck")
const BlackjackGame = require("../../../../src/commands/minigames/blackjack/game")
const BlackjackPlayer = require("../../../../src/commands/minigames/blackjack/player")

const expect = require("chai").expect

describe("Blackjack Game", function() {

  var game
  beforeEach(function() {
    game = new BlackjackGame({ dealerID: global.client.user.id, deck: "french", decks: 1 })
    game._reset()
  })

  afterEach(function() {
    game.removePlayer(global.client.user.id)
  })

  describe("constructor", function() {
    it("should create a new blackjack game", function() {
      expect(game.dealer).to.be.an.instanceof(BlackjackPlayer)
      expect(game.dealer.id).to.equal(global.client.user.id)
      expect(game.deck).to.be.an.instanceof(BlackjackDeck)
      expect(game.playerCount).to.equal(0)
      expect(game.timeLimit).to.be.a("number")
      expect(game.timeout).to.be.null
      expect(game.started).to.be.false
      expect(game.listenerCount("action")).to.be.above(0)
    })
  })

  describe("add player", function() {
    it("should add a player to the game and return its BlackjackPlayer instance", function() {
      const player = game.addPlayer(global.client.user.id)
      expect(game.hasPlayer(global.client.user.id)).to.be.true
      expect(game.playerCount).to.equal(1)
      expect(player).to.be.an.instanceof(BlackjackPlayer)
    })
  })

  describe("get player", function() {
    it("should return undefined if the player doesn't exist", function() {
      expect(game.getPlayer(global.client.user.id)).to.be.undefined
    })
    it("should return the player's BlackjackPlayer instance if it does exist", function() {
      game.addPlayer(global.client.user.id)
      expect(game.getPlayer(global.client.user.id)).to.be.an.instanceof(BlackjackPlayer)
    })
  })

  describe("has player", function() {
    it("should return false if the player doesn't exist", function() {
      expect(game.hasPlayer(global.client.user.id)).to.be.false
    })
    it("should return true if the player does exist", function() {
      game.addPlayer(global.client.user.id)
      expect(game.hasPlayer(global.client.user.id)).to.be.true
    })
  })

  describe("remove player", function() {
    it("should remove the player from the game", function() {
      game.addPlayer(global.client.user.id)
      game.removePlayer(global.client.user.id)
      expect(game.hasPlayer(global.client.user.id)).to.be.false
    })
  })

  describe("process turn, 1 player", function() {

    var player
    beforeEach(function() {
      if(!game.hasPlayer(global.client.user.id)) game.addPlayer(global.client.user.id)
      player = game.getPlayer(global.client.user.id)
    })

    afterEach(function() {
      game._reset()
    })

    describe("action: hit", function() {
      it("should have started be false, instant turn ending", function() {
        player.action = "hit"
        expect(game.started).to.be.false
      })
      it("should give 1 card to the player", function() {
        player.action = "hit"
        expect(player.hand.cards.length).to.equal(1)
      })
    })

    describe("action: stand", function() {
      it("should have started be false, instant turn ending", function() {
        player.action = "stand"
        expect(game.started).to.be.false
      })
      it("should end the game with a player win, loss or tie", function() {
        var win, lose, tie
        game
          .on("win", () => win = true)
          .on("lose", () => lose = true)
          .on("tie", () => tie = true)

        player.action = "stand"
        expect(win || lose || tie).to.be.true
      })
      it("should give the dealer 1 card", function() {
        player.action = "stand"
        expect(game.dealer.hand.cards.length).to.equal(1)
      })
      it("should give the player 2 cards", function() {
        player.action = "stand"
        expect(player.hand.cards.length).to.equal(2)
      })
    })

    describe("action: none", function() {
      it("should have started be false, instant turn ending", function() {
        player.action = null
        game.processTurn()
        expect(game.started).to.be.false
      })
      it("should kick the player from the game", function() {
        player.action = null
        game.processTurn()
        expect(game.hasPlayer(global.client.user.id)).to.be.false
      })
    })
  })

  describe("process turn, 2 players", function() {

    var player1, player2
    beforeEach(function() {
      if(!game.hasPlayer(global.client.user.id)) game.addPlayer(global.client.user.id)
      if(!game.hasPlayer(global.client.options.owner)) game.addPlayer(global.client.options.owner)
      player1 = game.getPlayer(global.client.user.id)
      player2 = game.getPlayer(global.client.options.owner)
    })

    afterEach(function() {
      game._reset()
    })

    describe("1 player actions", function() {
      describe("action: hit", function() {

        beforeEach(function() {
          player1.action = "hit"
        })

        it("should start the turn", function() {
          expect(game.started).to.be.true
          expect(game.timeout).to.be.ok
        })
        it("shouldn't allow the player's action to be changed afterwards", function() {
          player1.action = "stand"
          expect(player1.action).to.equal("hit")
        })
        it("shouldn't give cards to the player", function() {
          expect(player1.hand.cards.length).to.equal(0)
        })
      })

      describe("action: stand", function() {

        beforeEach(function() {
          player1.action = "stand"
        })

        it("should start the turn", function() {
          expect(game.started).to.be.true
          expect(game.timeout).to.be.ok
        })
        it("shouldn't allow the player's action to be changed afterwards", function() {
          player1.action = "hit"
          expect(player1.action).to.equal("stand")
        })
        it("shouldn't give cards to the player", function() {
          expect(player1.hand.cards.length).to.equal(0)
        })
      })

      describe("action: none", function() {
        it("shouldn't start the turn", function() {
          expect(player1.action).to.be.null
          expect(game.started).to.be.false
          expect(game.timeout).to.not.be.ok
        })
      })
    })

    describe("2 player actions", function() {
      describe("actions: hit, none", function() {

        beforeEach(function() {
          player1.action = "hit"
          player2.action = null
        })

        it("should start the turn", function() {
          expect(game.started).to.be.true
          expect(game.timeout).to.be.ok
        })
        it("shouldn't allow the first player's action to be changed afterwards", function() {
          player1.action = "stand"
          expect(player1.action).to.equal("hit")
        })
        it("shouldn't give cards to the first player", function() {
          expect(player1.hand.cards.length).to.equal(0)
        })

        describe("after turn time limit", function() {

          beforeEach(function() {
            game.processTurn()
          })

          it("should give 1 card to the first player", function() {
            expect(player1.hand.cards.length).to.equal(1)
          })
          it("should kick the second player from the game", function() {
            expect(game.getPlayer(global.client.options.owner)).to.be.undefined
          })
        })
      })

      describe("actions: hit, hit", function() {

        beforeEach(function() {
          player1.action = "hit"
          player2.action = "hit"
        })

        it("should end the turn", function() {
          expect(game.started).to.be.false
          expect(game.timeout).to.be.null
        })
        it("should give 1 card to each player", function() {
          expect(player1.hand.cards.length).to.equal(1)
          expect(player2.hand.cards.length).to.equal(1)
        })
        it("should make both player's actions be null", function() {
          expect(player1.action).to.be.null
          expect(player2.action).to.be.null
        })
        it("should allow both players actions to be changed afterwards, turn is over", function() {
          player1.action = "stand"
          expect(player1.action).to.equal("stand")
          player1.action = null
          player2.action = "stand"
          expect(player2.action).to.equal("stand")
          player2.action = null
        })
        it("should not end the game", function() {
          var win, lose, tie
          game
            .on("win", () => win = true)
            .on("lose", () => lose = true)
            .on("tie", () => tie = true)

          player1.action = "hit"
          player2.action = "hit"
          expect(win || lose || tie).to.be.undefined
        })
      })

      describe("actions: stand, none", function() {

        beforeEach(function() {
          player1.action = "stand"
          player2.action = null
        })

        it("should start the turn", function() {
          expect(game.started).to.be.true
          expect(game.timeout).to.be.ok
        })
        it("shouldn't allow the first player's action to be changed afterwards", function() {
          player1.action = "hit"
          expect(player1.action).to.equal("stand")
        })
        it("shouldn't give cards to the dealer", function() {
          expect(game.dealer.hand.cards.length).to.equal(0)
        })

        describe("after turn time limit", function() {
          it("should end the game with a first player win, loss or tie", function() {
            var win, lose, tie
            game
              .on("win", () => win = true)
              .on("lose", () => lose = true)
              .on("tie", () => tie = true)

            game.processTurn()
            expect(win || lose || tie).to.be.true
          })
          it("should kick the second player from the game", function() {
            game.processTurn()
            expect(game.getPlayer(global.client.options.owner)).to.be.undefined
          })

          describe("after round end", function() {

            beforeEach(function() {
              game.processTurn()
            })

            it("should give 1 card to the dealer", function() {
              expect(game.dealer.hand.cards.length).to.equal(1)
            })
            it("should give 2 cards to the first player", function() {
              expect(player1.hand.cards.length).to.equal(2)
            })
          })
        })
      })

      describe("actions: stand, stand", function() {

        beforeEach(function() {
          player1.action = "stand"
          player2.action = "stand"
        })

        it("should end the turn", function() {
          expect(game.started).to.be.false
          expect(game.timeout).to.be.null
        })
        it("should make both player's actions be null", function() {
          expect(player1.action).to.be.null
          expect(player2.action).to.be.null
        })
        it("should allow both player actions to be changed afterwards, turn is over", function() {
          player1.action = "hit"
          expect(player1.action).to.equal("hit")
          player1.action = null
          player2.action = "hit"
          expect(player2.action).to.equal("hit")
          player2.action = null
        })
        it("should end the game with both players winning, losing or tying", function() {
          var player1end
          var player2end
          game
            .on("win", (player) => player.id === player1.id ? player1end = true : player2end = true)
            .on("lose", (player) => player.id === player1.id ? player1end = true : player2end = true)
            .on("tie", (player) => player.id === player1.id ? player1end = true : player2end = true)

          player1.action = "stand"
          player2.action = "stand"
          expect(player1end && player2end).to.be.true
        })

        describe("after round end", function() {
          it("should give 1 card to the dealer", function() {
            expect(game.dealer.hand.cards.length).to.equal(1)
          })
          it("should give 2 cards to both players", function() {
            expect(player1.hand.cards.length).to.equal(2)
            expect(player2.hand.cards.length).to.equal(2)
          })
        })
      })
    })
  })
})
