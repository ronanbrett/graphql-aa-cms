interface Environment {
	mongodb: {
		address: string;
	}
}

import dockerEnv from './docker.env';
import devEnv from './development.env';


export default function environment(): Environment {
	switch (process.env['NODE_ENV']) {
		case 'docker':
			return dockerEnv;
		case 'development':
			return devEnv;
	}

}