var ETHNICITIES = {
  HISPANIC: "hispanic, latino, or spanish origin",
  BLACK: "black or african american",
  NHPI: "native hawaiian or pacific islander",
  MENA: "middle eastern or north african",
  WHITE: "white",
  OTHER: "other",
  AIAN: "american indian or alaska native",
  ASIAN: "asian"
}

module.exports = {
  ethnicities: [
    {
      title: ETHNICITIES.HISPANIC,
      tone: ["🏼", "🏽", "🏾"],
      emojis: ["🤚","🤙","✍️","👐","👏","🤘","✌️"]
    },
    {
      title: ETHNICITIES.BLACK,
      tone: ["🏿", "🏿", "🏿", "🏾"],
      emojis: ["🤚","🤙","✍️","👐","👏","🤘","✌️"]
    },
    {
      title: ETHNICITIES.NHPI,
      tone: ["🏽"],
      emojis: ["🤚","🤙","✍️","👐","👏","🤘","✌️"]
    },
    {
      title: ETHNICITIES.MENA,
      tone: ["🏿", "🏾", "🏾", "🏾"],
      emojis: ["🤚","🤙","✍️","👐","👏","🤘","✌️"]
    },
    {
      title: ETHNICITIES.WHITE,
      tone: ["🏻"],
      emojis: ["🤚","🤙","✍️","👐","👏","🤘","✌️"]
    },
    {
      title: ETHNICITIES.OTHER,
      tone: [""],
      emojis: ["🤚","🤙","✍️","👐","👏","🤘","✌️"]
    },
    {
      title: ETHNICITIES.AIAN,
      tone: ["🏾"],
      emojis: ["🤚","🤙","✍️","👐","👏","🤘","✌️"]
    },
    {
      title: ETHNICITIES.ASIAN,
      tone: ["🏻","🏼","🏽"],
      emojis: ["🤚","🤙","✍️","👐","👏","🤘","✌️"]
    },
  ]
}
