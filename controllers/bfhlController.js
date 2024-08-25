const USER_ID = "Avantee_Singh";
const EMAIL = "avantee280209@gmail.com";
const ROLL_NUMBER = "21BCE10223";

exports.postBfhl = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input: data must be an array",
      });
    }

    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(
      (item) => item.toLowerCase() === item
    );
    const highestLowercaseAlphabet =
      lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    res.json({
      is_success: true,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, error: "Internal server error" });
  }
};

exports.getBfhl = (req, res) => {
  res.json({ operation_code: 1 });
};
