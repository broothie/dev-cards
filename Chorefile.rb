
def publish(message)
	docker
	git(message)
end

def frontend
	puts `chore bundle`
end

def git(message)
	puts `git add -A`
	puts `git commit -m "#{message}"`
end

def docker
	puts `docker build . -t gcr.io/catan-274322/catan`
	puts `docker push gcr.io/catan-274322/catan`
end
