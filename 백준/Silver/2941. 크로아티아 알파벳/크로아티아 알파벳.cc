#include <iostream>
#include <string>
using namespace std;

int main() {
	int count = 0;
	string word = "";
	cin >> word;

	int i = 0;
	while (i < word.length()) {
		int temp = i + 1;
		if (temp >= word.length()) {
			count++;
			i++;
			break;
		}

		if (word[i] == 'c') {
			if ((word[temp] == '=') || (word[temp] == '-')) {
				count++;
				i += 2;
				continue;
			}
		}
		else if (word[i] == 'd') {
			if (word[temp] == 'z') {
				if (temp + 1 < word.length() && word[temp + 1] == '=') {
					count++;
					i += 3;
					continue;
				}
			}
			else if (word[temp] == '-') {
				count++;
				i += 2;
				continue;
			}
		}
		else if (word[i] == 'l') {
			if (word[temp] == 'j') {
				count++;
				i += 2;
				continue;
			}
		}
		else if (word[i] == 'n') {
			if (word[temp] == 'j') {
				count++;
				i += 2;
				continue;
			}
		}
		else if (word[i] == 's') {
			if (word[temp] == '=') {
				count++;
				i += 2;
				continue;
			}
		}
		else if (word[i] == 'z') {
			if (word[temp] == '=') {
				count++;
				i += 2;
				continue;
			}
		}
		count++;
		i++;
	}
	cout << count;

	return 0;
}