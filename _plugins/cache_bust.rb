module Jekyll
    module CacheBust
        require 'digest/sha1'
        def cache_bust(file_name)
            hash = Digest::SHA1.file File.join(".", file_name)
            ext_name = File.extname(file_name)
            base_name = File.basename(file_name, ext_name)
            [base_name, '.', hash.hexdigest[0, 8], ext_name].join
        end
    end
end

Liquid::Template.register_filter(Jekyll::CacheBust)
