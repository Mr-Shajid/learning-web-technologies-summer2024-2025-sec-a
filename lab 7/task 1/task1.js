
        function validateInput() {
            const input = document.getElementById("nameInput").value.trim();

            // Rule 1: Not empty
            if (input === "") {
                alert("Name field cannot be empty.");
                return;
            }

            // Rule 2: At least 2 words
            const words = input.split(" ").filter(word => word !== "");
            if (words.length < 2) {
                alert("Please enter at least two words.");
                return;
            }

            // Rule 3: Only letters, dots, and dashes
            for (let i = 0; i < input.length; i++) {
                const ch = input[i];
                const isLetter = (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z');
                const isAllowedSymbol = ch === '.' || ch === '-' || ch === ' ' ;
                if (!(isLetter || isAllowedSymbol)) {
                    alert("Only letters, dots (.), dashes (-), and spaces are allowed.");
                    return;
                }
            }

            // Rule 4: Must start with a letter
            const firstChar = input[0];
            const isFirstLetter = (firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z');
            if (!isFirstLetter) {
                alert("Name must start with a letter.");
                return;
            }

            // If all rules pass
            alert("Submitted successfully: " + input);
        }
