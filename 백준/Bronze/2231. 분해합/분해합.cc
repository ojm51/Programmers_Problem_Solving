#include <iostream>
using namespace std;

int main() {
	int NUMBER = 0;
	cin >> NUMBER;

	int result = 0;
	for (int i = NUMBER; i > 0; i--) {
		int temp = i;
		int sum = temp;
		while (temp > 0) {
			sum += temp % 10;
			temp /= 10;
		}
		if (sum == NUMBER) result = i;
	}
	cout << result << "\n";
	
	return 0;
}